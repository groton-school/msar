import {OAuth2Plugin, Configuration, Token, Client} from '@oauth2-cli/qui-cli/dist/Extend.js';
import * as OAuth2 from '@oauth2-cli/qui-cli/dist/Export.js'
import { Colors } from '@qui-cli/colors';
import { Env } from '@qui-cli/env';
import * as Plugin from '@qui-cli/plugin';
import * as requestish from 'requestish'

type Credentials = OAuth2.Credentials & {subscription_key: string}

export type SkyConfiguration = Configuration & {credentials?: Partial<Credentials>}

export class SkyAPIPlugin extends OAuth2Plugin {
  private subscription_key?: string = undefined

  public constructor() {
    super('@oauth2-cli/sky-api');
    super.configure({
      credentials:{
        issuer: 'https://oauth2.sky.blackbaud.com'
},
      base_url:'https://api.sky.blackbaud.com',
      man: { heading: 'Sky API options',
        text:[
          `The OAuth 2.0 ${Colors.keyword('refresh_token')} is read from the `+
          `${Colors.varName('SKY_REFRESH_TOKEN')} environment variable, if `+
          `present.`,
          `The Sky API subscription access key is read from the `+
          `${Colors.varName('SKY_SUBSCRIPTION_KEY')} environment variable, if `+
          `present. See `+
          `${Colors.url('https://developer.blackbaud.com/subscriptions/')} `+
          `for more information.`]
       },
      env: {
        client_id: 'SKY_CLIENT_ID',
        client_secret: 'SKY_CLIENT_SECRET',
        scope: 'SKY_SCOPE',
        redirect_uri: 'SKY_REDIRECT_URI',
      },
      suppress: {
        issuer: true,
        authorization_endpoint: true,
        token_endpoint: true,
      },
      storage:new Token.EnvironmentStorage('SKY_REFRESH_TOKEN')
    });
  }

  public configure({credentials, ...options}: SkyConfiguration = {}): void {
    const {subscription_key, ...rest} = credentials || {};
    super.configure({credentials:rest, ...options});
    this.subscription_key = Plugin.hydrate(subscription_key, this.subscription_key);
  }

  public async init(args: Plugin.ExpectedArguments<typeof this.options>) {
    await super.init(args);
    this.configure({credentials: {subscription_key: await Env.get({key: 'SKY_SUBSCRIPTION_KEY'})}})
  }

  protected instantiateClient(options: OAuth2.ClientOptions): Client {
    if (!this.subscription_key) {
      throw new Error('No subscription access key is defined.');
    }
        let {headers} = options.inject || {};
    headers = requestish.Headers.merge(headers, {
          'Bb-Api-Subscription-Key': this.subscription_key})
    return new Client({
      ...options,
      inject:{
        headers}
    });
  }
}
