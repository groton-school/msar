> This package was developed to work with data stored in Blackbaud SIS/LMS/SWS instances. We are no longer Blackbaud users, and therefore no longer actively maintaining this package. If you would like to discuss this tool, or the approaches it took to accessing otherwise inaccessible data in Blackbaud, please reach out directly to [Seth Battis](mailto:seth@battis.net?subject=msar)

# @msar/school-website

A component of [msar](https://www.npmjs.com/package/msar): Archive content from the School Website

![NPM Version](https://img.shields.io/npm/v/@msar/school-website)

Archive content from the School Website. Output is organized as named JSON index files for each downloaded content type, with the files themselves stored in the same directory mirroring the CDN paths. Relative file paths to content are inserted into the index files alongside the original URLs.

## Install

This workflow is a subcommand of the [msar](https://www.npmjs.com/package/msar) tool, which can be installed using `npm` (or your preferred equivalent):

```bash
npm install -g msar
```

It depends on [Node.js](https://nodejs.org/) which provides the `npm` package manager tool when installed.
