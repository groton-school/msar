# @msar/snapshot

A component of [msar](https://www.npmjs.com/package/msar): Capture a JSON snapshot of an individual course

![NPM Version](https://img.shields.io/npm/v/@msar/snapshot)

Capture a JSON snapshot of an individual course. In addition to relevant flags and options, the only argument expected is a `url` to a page within the target course.

## Install

This workflow is a subcommand of the [msar](https://www.npmjs.com/package/msar) tool, which can be installed using `npm` (or your preferred equivalent):

```bash
npm install -g msar
```

It depends on [Node.js](https://nodejs.org/) which provides the `npm` package manager tool when installed.

Usage:

<pre lang="bash">msar snapshot -hbtagA --o=&lt;outputPath&gt; --u=&lt;username&gt; --p=&lt;password&gt; --active --future --expired --studentData --metadata --pretty --headless --devtools --quit --commands --silent --logging --ignoreErrors --logRequests --fromDate=&lt;fromDate&gt; --toDate=&lt;toDate&gt; --association=&lt;`"Activities"`, `"Advisories"`, `"Classes"`, `"Community Groups"`, `"Dorms"`, and `"Teams"`&gt; --termsOffered=&lt;termsOffered&gt; --groupsPath=&lt;groupsPath&gt; --year=&lt;year&gt; --csv=&lt;csv&gt; --resume=&lt;resume&gt; --sso=&lt;sso&gt; --mfa=&lt;mfa&gt; --viewportWidth=&lt;viewportWidth&gt; --viewportHeight=&lt;viewportHeight&gt; --opAccount=&lt;example.1password.com&gt; --opItem=&lt;1Password unique identifier&gt; --opToken=&lt;token value&gt; --logFilePath=&lt;logFilePath&gt; --stdoutLevel=&lt;all|trace|debug|info|warning|error|fatal|off&gt; --fileLevel=&lt;all|trace|debug|info|warning|error|fatal|off&gt; --concurrency=&lt;concurrency&gt; --rate=&lt;rate&gt; <u>url</u></pre>



### Positional arguments

#### <u>`url`</u>

The URL of a page within the target course

### Arguments

#### `-h --help`

Show this usage information

### Snapshot options

Capture a JSON snapshot of an individual course. In addition to relevant flags and options, the only argument expected is a <u>`url`</u> to a page within the target course.

#### `--active`

Show currently active items (Default: `true`, use `--no-active` to disable)

#### `--future`

Show future items (Default: `true`, use `--no-future` to disable)

#### `--expired`

Show expired items (Default: `true`, use `--no-expired` to disable)

#### `-b --bulletinBoard`

Include the course Bulletin Board in the snapshot (Default: `true`, use `--no-bulletinBoard` to disable)

#### `-t --topics`

Include the course Topics in the snapshot (Default: `true`, use `--no-topics` to disable)

#### `-a --assignments`

Include the course Assignments in the snapshot (Default: `true`, use `--no-assignments` to disable)

#### `-g --gradebook`

Include the course Gradebook in the snapshot (Default: `true`, use `--no-gradebook` to disable)

#### `--studentData`

Include student data in the course snapshot (Default: `true`, use `--no-studentData` to disable)

#### `--metadata`

Include additional ``:Snapshot``.metadata.json` recording the parameters of the snapshot command. (Default: `true`, use `--no-metadata` to disable)

#### `-A --all`

Capture all sections; positional argument <u>`url`</u> is used to identify MySchoolApp instance (Default: `false`)

#### `--fromDate=<fromDate>`

Starting date for date-based filter where relevant (Default: `"4/27/2026"`)

#### `--toDate=<toDate>`

ending date for data-based filter where relevant

#### `--association=<`"Activities"`, `"Advisories"`, `"Classes"`, `"Community Groups"`, `"Dorms"`, and `"Teams"`>`

Comma-separated list of group associations to include if `--all` flag is used.

#### `--termsOffered=<termsOffered>`

Comma-separated list of terms to include if `--all` flag is used

#### `--groupsPath=<groupsPath>`

Path to output directory or file to save filtered groups listing (include placeholder `"%TIMESTAMP%"` to specify its location, otherwise it is added automatically when needed to avoid overwriting existing files)

#### `--year=<year>`

If `--all` flag is used, which year to download (Default: `"2025 - 2026"`)

#### `--csv=<csv>`

Path to CSV file of group IDs to snapshot (must contain a column named `Group ID`)

#### `--resume=<resume>`

If `--all` flag is used,UUID name of temp directory (`/tmp/msar/snapshot/`:uuid```) for which to resume collecting snapshots

### Sky API options

The OAuth 2.0 **client_id** is set from the environment variable `SKY_CLIENT_ID`, if present. See `https://developer.blackbaud.com/apps/` for more information.

The OAuth 2.0 **client_secret** is set from the environment variable `SKY_CLIENT_SECRET`, if present.

The OAuth 2.0 **scope** is set from the environment variable `SKY_SCOPE`, if present.

The OAuth 2.0 **redirect_uri**, which must at least redirect to `localhost`, is set from the environment variable `SKY_REDIRECT_URI`, if present. (e.g. `"http://localhost:3000/redirect"`)

The Sky API **subscription_key** is read from the `SKY_SUBSCRIPTION_KEY` environment variable, if present. See `https://developer.blackbaud.com/subscriptions/` for more information.

The OAuth 2.0 **refresh_token** is read from the `SKY_REFRESH_TOKEN` environment variable, if present.

### Output options

#### `-o<outputPath> --outputPath=<outputPath>`

Path to output directory or file to save command output (default: `/Users/sbattis/Documents/GitHub/msar/`:Snapshot``.json`, where `:Snapshot` is either the name of the course in `"`:Year`` - `:Teacher` - `:CourseTitle` - `:SectionId`"` format for a single section or group or "snapshot"` if the `--all` flag is set. ``:Snapshot``.metadata.json` is also output, recording the parameters of the snapshot command. Will use the value in environment variable `OUTPUT_PATH` if present)

#### `--pretty`

Pretty print output to file (if `--outputPath` option is used)

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

MySchoolApp SSO configuration (currently only accepts "entra-id"`, will use the value in environment variable `PUPPETEER_SSO` if present)

#### `--mfa=<mfa>`

MySchoolApp MFA configuration (currently only accepts "authenticator"`, will use the value in environment variable `PUPPETEER_MFA` if present)

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

Log level to console stdout (Default: "info"`)

#### `--fileLevel=<all|trace|debug|info|warning|error|fatal|off>`

Log level to log file if `--logFilePath` provided (Default: "all"`)

### Workflow behavior options

#### `--ignoreErrors`

Continue run even if errors are encountered (Default: `true`, use `--no-ignoreErrors` to disable)

#### `--logRequests`

Log fetch requests and responses for analysis and debugging (Default: `false`)

#### `--concurrency=<n>`

The number of concurrent threads to run (Default: `1`)

#### `--rate=<n>`

The number of server requests allowed per second
