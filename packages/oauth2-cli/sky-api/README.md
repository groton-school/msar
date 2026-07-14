> This package was developed to work with data stored in Blackbaud SIS/LMS/SWS instances. We are no longer Blackbaud users, and therefore no longer actively maintaining this package. If you would like to discuss this tool, or the approaches it took to accessing otherwise inaccessible data in Blackbaud, please reach out directly to [Seth Battis](mailto:seth@battis.net?subject=@oauth2-cli/sky-api)

# @oauth2-cli/sky-api

Acquire SKY API access tokens via OAuth 2.0 within CLI tools

## Install

```sh
npm i @oauth2-cli/sky-api @qui-cli/core
```

## Usage

Configure your SKY API app credentials somewhere relatively secure (e.g. your environment) and then...

```ts
import { SkyAPI } from '@oauth2-cli/sky-api';
import { Core } from '@qui-cli/core';

await Core.run();
console.log(
  await sky.fetchJSON('https://api.sky.blackbaud.com/school/v1/users/me')
);
```
