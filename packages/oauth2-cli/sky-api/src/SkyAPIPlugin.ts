import * as OAuth2CLI from '@oauth2-cli/qui-cli/dist/Unregistered.js';
import { Colors } from '@qui-cli/colors';
import { Env } from '@qui-cli/env';
import * as Plugin from '@qui-cli/plugin';
import * as requestish from 'requestish';

type Credentials = OAuth2CLI.Credentials & { subscription_key: string };

export type Configuration = OAuth2CLI.Configuration & {
  credentials?: Partial<Credentials>;
};

export class SkyAPIPlugin extends OAuth2CLI.OAuth2Plugin<
  Credentials,
  OAuth2CLI.Client<Credentials>
> {
  private subscription_key?: string = undefined;

  public constructor() {
    super('@oauth2-cli/sky-api');
    super.configure({
      credentials: {
        issuer: 'https://oauth2.sky.blackbaud.com'
      },
      base_url: 'https://api.sky.blackbaud.com',
      man: {
        heading: 'Sky API options',
        text: [
          `The Sky API ${Colors.keyword('subscription_key')} is read from the ` +
            `${Colors.varName('SKY_SUBSCRIPTION_KEY')} environment variable, if ` +
            `present. See ` +
            `${Colors.url('https://developer.blackbaud.com/subscriptions/')} ` +
            `for more information.`,
          `The OAuth 2.0 ${Colors.keyword('refresh_token')} is read from the ` +
            `${Colors.varName('SKY_REFRESH_TOKEN')} environment variable, if ` +
            `present.`
        ]
      },
      url: {
        client_id: 'https://developer.blackbaud.com/apps/'
      },
      env: {
        client_id: 'SKY_CLIENT_ID',
        client_secret: 'SKY_CLIENT_SECRET',
        scope: 'SKY_SCOPE',
        redirect_uri: 'SKY_REDIRECT_URI'
      },
      suppress: {
        issuer: true,
        authorization_endpoint: true,
        token_endpoint: true,
        base_url: true
      },
      storage: new OAuth2CLI.Token.EnvironmentStorage('SKY_REFRESH_TOKEN')
    });
  }

  public configure({ credentials, ...options }: Configuration = {}): void {
    const { subscription_key, ...rest } = credentials || {};
    super.configure({ credentials: rest, ...options });
    this.subscription_key = Plugin.hydrate(
      subscription_key,
      this.subscription_key
    );
  }

  public async init(args: Plugin.ExpectedArguments<typeof this.options>) {
    await super.init(args);
    this.configure({
      credentials: {
        subscription_key: await Env.get({ key: 'SKY_SUBSCRIPTION_KEY' })
      }
    });
  }

  protected instantiateClient(
    options: OAuth2CLI.ClientOptions<Credentials>
  ): OAuth2CLI.Client<Credentials> {
    if (!this.subscription_key) {
      throw new Error('No subscription access key is defined.');
    }
    let { headers } = options.inject || {};
    headers = requestish.Headers.merge(headers, {
      'Bb-Api-Subscription-Key': this.subscription_key
    });
    return new OAuth2CLI.Client({
      ...options,
      inject: {
        headers
      }
    });
  }
}
