import { PathString } from '@battis/descriptive-types';
import { JSONValue } from '@battis/typescript-tricks';
import { Output } from '@msar/output';
import * as Import from '@msar/types.import';
import { Colors } from '@qui-cli/colors';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';

type Options = {
  entry: JSONValue;
  index: PathString;
  destination: PathString;
};

export async function copy({ entry, index, destination }: Options) {
  if (typeof entry !== 'object' || entry === null) {
    return;
  }
  if (Import.willBeAnnotated(entry)) {
    const sourcePath = path.join(path.dirname(index), entry.localPath);
    const destPath = await Output.avoidOverwrite(
      path.join(destination, entry.filename)
    );
    const spinner = ora(
      `Copying ${Colors.value(path.basename(entry.localPath))} to ${Colors.path(destPath)}`
    ).start();
    if (fs.existsSync(sourcePath)) {
      fs.mkdirSync(destination, { recursive: true });
      fs.copyFileSync(sourcePath, destPath);
      spinner.succeed(Colors.path(destPath, Colors.value));
    } else {
      spinner.fail(`${Colors.path(sourcePath, Colors.error)} not found`);
    }
  } else {
    for (const key in entry) {
      // @ts-expect-error 7053
      copy({ entry: entry[key], index, destination });
    }
  }
}
