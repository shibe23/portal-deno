import {add} from "./add.ts";
import {edit} from "./edit.ts";
import {remove} from "./remove.ts";
import {list} from "./list.ts";

const [command, label, dir] = Deno.args;
type Command = string | null;

// TODO: Windows対応
// const filePath = Deno.build.os === 'windows'
//   ? path.join(process.env.APPDATA!, 'Portal', 'portal.dat')
//   : path.join(os.homedir(), '.portal');

const filePath = `${Deno.env.get("HOME")}/.portal`;

if (!filePath){
  throw new Error(".portal file doesn't exist.")
}

export interface CommandArgs {
  label: string | null;
  dir: string | null;
}

const commandArgs: CommandArgs = {
  label,
  dir,
};

export interface AppOptions {
  PORTAL_FILE: string;
}

const appOptions = {
  PORTAL_FILE: filePath,
};

async function main(
  command: Command,
  commandArgs: CommandArgs,
  appOptions: AppOptions,
) {
  if (!command) {
    return showAllCommands();
  }
  switch (command) {
    case "go":
      // go(commandArgs, appOptions)
      break;
    case "add":
      isValidAllOptions(commandArgs)
      add(commandArgs, appOptions)
      break;
    case "edit":
      isValidAllOptions(commandArgs)
      edit(commandArgs, appOptions)
      break;
    case "remove":
      remove(commandArgs, appOptions)
      break;
    case "list":
      list(appOptions)
      break;
  }
}

function isValidAllOptions(commandArgs: CommandArgs){
  if (!commandArgs.label || !commandArgs.dir) {
    throw new Error(`Invalid Parameters. ${commandArgs.label} ${commandArgs.dir}`)
  }
}

function showAllCommands() {
  console.log("portal go     [label]");
  console.log("portal add    [label] [dir]");
  console.log("portal remove [label]");
  console.log("portal list");
}

main(command, commandArgs, appOptions);
