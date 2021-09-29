muneeb
======

Todo CLI app

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/muneeb.svg)](https://npmjs.org/package/muneeb)
[![Downloads/week](https://img.shields.io/npm/dw/muneeb.svg)](https://npmjs.org/package/muneeb)
[![License](https://img.shields.io/npm/l/muneeb.svg)](https://github.com/MUHAMMAD-MUNEEB-WASEEM/muneeb/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g muneeb
$ muneeb COMMAND
running command...
$ muneeb (-v|--version|version)
muneeb/0.0.0 win32-x64 node-v14.17.6
$ muneeb --help [COMMAND]
USAGE
  $ muneeb COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`muneeb add [FILE]`](#muneeb-add-file)
* [`muneeb hello [FILE]`](#muneeb-hello-file)
* [`muneeb help [COMMAND]`](#muneeb-help-command)

## `muneeb add [FILE]`

describe the command here

```
USAGE
  $ muneeb add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add.ts](https://github.com/MUHAMMAD-MUNEEB-WASEEM/muneeb/blob/v0.0.0/src/commands/add.ts)_

## `muneeb hello [FILE]`

describe the command here

```
USAGE
  $ muneeb hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ muneeb hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/MUHAMMAD-MUNEEB-WASEEM/muneeb/blob/v0.0.0/src/commands/hello.ts)_

## `muneeb help [COMMAND]`

display help for muneeb

```
USAGE
  $ muneeb help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
