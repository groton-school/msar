# @msar/expot

A component of [msar](https://www.npmjs.com/package/msar): Export a human-readable version of an archived snapshot of a course

![NPM Version](https://img.shields.io/npm/v/@msar/snapshot)

Export a human-readable version of an archived snapshot of a course

## Install

This workflow is a subcommand of the [msar](https://www.npmjs.com/package/msar) tool, which can be installed using `npm` (or your preferred equivalent):

```bash
npm install -g msar
```

It depends on [Node.js](https://nodejs.org/) which provides the `npm` package manager tool when installed.

Usage:

<pre lang="bash">msar export -h --o=&lt;outputPath&gt; --bulletinBoard --topics --assignments --pretty --commands --silent --logging --ignoreErrors --logRequests --groupId=&lt;groupId&gt; --opAccount=&lt;example.1password.com&gt; --opItem=&lt;1Password unique identifier&gt; --opToken=&lt;token value&gt; --logFilePath=&lt;logFilePath&gt; --stdoutLevel=&lt;all|trace|debug|info|warning|error|fatal|off&gt; --fileLevel=&lt;all|trace|debug|info|warning|error|fatal|off&gt; <u>pathToSnapshot</u></pre>



### Positional arguments

#### <u>`pathToSnapshot`</u>

Path to an msar snapshot JSON index file

### Arguments

#### `-h --help`

Show this usage information

### Export Options

#### `--groupId=<n>`

Group ID of group to export Can be set multiple times

#### `--bulletinBoard`

Export bulletin board contents (Default: `true`, use `--no-bulletinBoard` to disable)

#### `--topics`

Export topic pages (Default: `true`, use `--no-topics` to disable)

#### `--assignments`

Export assignment pages

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

### Workflow behavior options

#### `--ignoreErrors`

Continue run even if errors are encountered (Default: `true`, use `--no-ignoreErrors` to disable)

#### `--logRequests`

Log fetch requests and responses for analysis and debugging (Default: `false`)
