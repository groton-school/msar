# @msar/inbox

A component of [msar](https://www.npmjs.com/package/msar): Analyze the message inbox data

![NPM Version](https://img.shields.io/npm/v/@msar/inbox)

Analyze inbox contents for a user or users. Include the URL of the LMS instance as url (required) and path to a CSV file of user identifiers to analyze as csv (optional if `--val` is set). Intended to receive a generic `UserWorkList.csv` export from the LMS as input, outputting the same CSV file to `--outputPath` with analysis columns appended.

## Install

This workflow is a subcommand of the [msar](https://www.npmjs.com/package/msar) tool, which can be installed using `npm` (or your preferred equivalent):

```bash
npm install -g msar
```

It depends on [Node.js](https://nodejs.org/) which provides the `npm` package manager tool when installed.

Usage:

<pre lang="bash">msar inbox -h --v=&lt;val&gt; --o=&lt;outputPath&gt; --u=&lt;username&gt; --p=&lt;password&gt; --pretty --headless --devtools --quit --commands --silent --logging --ignoreErrors --logRequests --column=&lt;column&gt; --searchIn=&lt;searchIn&gt; --sso=&lt;sso&gt; --mfa=&lt;mfa&gt; --viewportWidth=&lt;viewportWidth&gt; --viewportHeight=&lt;viewportHeight&gt; --opAccount=&lt;example.1password.com&gt; --opItem=&lt;1Password unique identifier&gt; --opToken=&lt;token value&gt; --logFilePath=&lt;logFilePath&gt; --stdoutLevel=&lt;all|trace|debug|info|warning|error|fatal|off&gt; --fileLevel=&lt;all|trace|debug|info|warning|error|fatal|off&gt; --concurrency=&lt;concurrency&gt; --rate=&lt;rate&gt; <u>url</u> <u>csv</u></pre>



### Positional arguments

#### <u>`url`</u>

The URL of the LMS instance as <u>`url`</u> (required)

#### <u>`csv`</u>

Path to a CSV file of user identifiers to analyze as <u>`csv`</u> (optional if `--val` is set)

### Arguments

#### `-h --help`

Show this usage information

### Inbox options

Analyze inbox contents for a user or users. Include the URL of the LMS instance as <u>`url`</u> (required) and path to a CSV file of user identifiers to analyze as <u>`csv`</u> (optional if `--val` is set). Intended to receive a generic `UserWorkList.csv` export from the LMS as input, outputting the same CSV file to `--outputPath` with analysis columns appended.

Due to the number of impersonated clicks necessary for this workflow, running `--headless` reduces the likelihood of stray user actions interfering with the script.

#### `--column=<column>`

Column label for CSV input (<u>`csv`</u>) column containing user identifier for inboxes to analyze. Required if opening a CSV of user identifiers. (Default: `"User ID"`)

#### `--searchIn=<searchIn>`

Field to search for user identifier. Required for all uses. One of `"LastName"`, `"FirstName"`, `"Email"`, `"MaidenName"`, `"PreferredName"`, `"BusinessName"`, `"UserID"`, `"HostID"`, `"lastname"`, `"firstname"`, `"email"`, `"maidenname"`, `"nickname"`, `"business_name"`, `"pk"` or `"conversion_string"` (Default: `"UserID"`)

#### `-v<val> --val=<val>`

A user identifier to query. Requires corresponding `--searchIn`. If set, <u>`csv`</u> path to CSV file is not required. (Default: ) Can be set multiple times

### Output options

#### `-o<outputPath> --outputPath=<outputPath>`

Path to output directory or file to save command output, will use the value in environment variable `OUTPUT_PATH` if present

#### `--pretty`

Pretty print output to file (if `--outputPath` option is used)

### Puppeteer options

#### `--headless`

Run Puppeteer's Chrome instance headless (Default: `true`, use `--no-headless` to disable)

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

### Workflow behavior options

#### `--ignoreErrors`

Continue run even if errors are encountered (Default: `true`, use `--no-ignoreErrors` to disable)

#### `--logRequests`

Log fetch requests and responses for analysis and debugging (Default: `false`)

#### `--concurrency=<n>`

The number of concurrent threads to run (Default: `1`)

#### `--rate=<n>`

The number of server requests allowed per second
