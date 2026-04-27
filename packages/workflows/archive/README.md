# @msar/archive

A component of [msar](https://www.npmjs.com/package/msar): Create a local archive from a [@msar/snapshot](https://www.npmjs.com/package/@msar/snapshot)

![NPM Version](https://img.shields.io/npm/v/@msar/archive)

## Install

This workflow is a subcommand of the [msar](https://www.npmjs.com/package/msar) tool, which can be installed using `npm` (or your preferred equivalent):

```bash
npm install -g msar
```

It depends on [Node.js](https://nodejs.org/) which provides the `npm` package manager tool when installed.

Usage:

<pre lang="bash">msar archive -h --u=&lt;username&gt; --p=&lt;password&gt; --o=&lt;outputPath&gt; --retry --headless --devtools --quit --pretty --commands --silent --logging --ignoreErrors --logRequests --include=&lt;`"^\\/\\.example\\.com"`&gt; --exclude=&lt;`"\\.example\\.com,foo\\..+\\.com"`&gt; --sso=&lt;sso&gt; --mfa=&lt;mfa&gt; --viewportWidth=&lt;viewportWidth&gt; --viewportHeight=&lt;viewportHeight&gt; --opAccount=&lt;example.1password.com&gt; --opItem=&lt;1Password unique identifier&gt; --opToken=&lt;token value&gt; --logFilePath=&lt;logFilePath&gt; --stdoutLevel=&lt;all|trace|debug|info|warning|error|fatal|off&gt; --fileLevel=&lt;all|trace|debug|info|warning|error|fatal|off&gt; --concurrency=&lt;concurrency&gt; --rate=&lt;rate&gt; <u>snapshotPath</u></pre>



### Positional arguments

#### <u>`snapshotPath`</u>

Path to an existing snapshot file

### Arguments

#### `-h --help`

Show this usage information

### Archive options

Download the supporting files for an existing snapshot JSON file. This command requires a path to an existing snapshot file (<u>`snapshotPath`</u>).

#### `--retry`

Retry a previously started archive process. <u>`snapshotPath`</u> must be the path to an existing archive index.json file.

#### `--include=<`"^\/\.example\.com"`>`

Comma-separated list of regular expressions to match URLs to be included in download (Default: `"^\\/.*"`)

#### `--exclude=<`"\.example\.com,foo\..+\.com"`>`

Comma-separated list of regular expressions to match URLs to exclude from download (Default: `"^https?:"`)

### Puppeteer options

#### `--headless`

Run Puppeteer's Chrome instance headless (Default: `false`)

#### `--devtools`

Open Chrome DevTools with the window

#### `--quit`

Quit Puppeteer's Chrome instance on successful completion (Default: `true`, use `--no-quit` to disable)

#### `-u<username> --username=<username>`

MySchoolApp username

#### `-p<password> --password=<password>`

MySchoolApp password

#### `--sso=<sso>`

MySchoolApp SSO configuration (currently only accepts `"entra-id"`, will use the value in environment variable `PUPPETEER_SSO` if present)

#### `--mfa=<mfa>`

MySchoolApp MFA configuration (currently only accepts `"authenticator"`, will use the value in environment variable `PUPPETEER_MFA` if present)

#### `--viewportWidth=<n>`

Default: `0`

#### `--viewportHeight=<n>`

Default: `0`

### Output options

#### `-o<outputPath> --outputPath=<outputPath>`

Path to output directory or file to save command output, will use the value in environment variable `OUTPUT_PATH` if present

#### `--pretty`

Pretty print output to file (if `--outputPath` option is used)

### 1Password environment integration

If 1Password secret references are stored in the environment, a 1Password service account token is required to access the secret values.

#### `--opAccount=<example.1password.com>`

1Password account to use (if signed into multiple); will use environment variable `OP_ACCOUNT` if present

#### `--opItem=<1Password unique identifier>`

Name or ID of the 1Password API Credential item storing the 1Password service account token; will use environment variable `OP_ITEM` if present. Requires the 1Password CLI tool (`https://developer.1password.com/docs/cli`)

#### `--opToken=<token value>`

1Password service account token; will use environment variable `OP_TOKEN` if present

### Shell command options

#### `--commands`

Include shell commands in log (Default: `true`, use `--no-commands` to disable)

#### `--silent`

Hide command output (Default: `false`)

#### `--logging`

Log commands and output at level `debug` (Default: `true`, use `--no-logging` to disable)

### Logging options

#### `--logFilePath=<logFilePath>`

Path to log file (optional)

#### `--stdoutLevel=<all|trace|debug|info|warning|error|fatal|off>`

Log level to console stdout (Default: `"info"`)

#### `--fileLevel=<all|trace|debug|info|warning|error|fatal|off>`

Log level to log file if `--logFilePath` provided (Default: `"all"`)

#### `--concurrency=<n>`

The number of concurrent threads to run (Default: `1`)

#### `--rate=<n>`

The number of server requests allowed per second

### Workflow behavior options

#### `--ignoreErrors`

Continue run even if errors are encountered (Default: `true`, use `--no-ignoreErrors` to disable)

#### `--logRequests`

Log fetch requests and responses for analysis and debugging (Default: `false`)
