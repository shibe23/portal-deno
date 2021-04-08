import { add } from "./add.ts";
import { edit } from "./edit.ts";
import { remove } from "./remove.ts";
import { list } from "./list.ts";
import { go } from "./go.ts";

const [command, label, dir] = Deno.args;
type Command = string | null;

export interface CommandArgs {
  label: string | null;
  dir: string | null;
}

const commandArgs: CommandArgs = {
  label,
  dir,
};

async function main(
  command: Command,
  commandArgs: CommandArgs,
) {
  if (!command) {
    return showAllCommands();
  }
  switch (command) {
    case "go":
      isValidWithoutDir(commandArgs);
      await go(commandArgs);
      break;
    case "add":
      isValidAllOptions(commandArgs);
      await add(commandArgs);
      break;
    case "edit":
      isValidAllOptions(commandArgs);
      await edit(commandArgs);
      break;
    case "remove":
      isValidWithoutDir(commandArgs);
      await remove(commandArgs);
      break;
    case "list":
      await list();
      break;
    default:
      console.log('Invalid Command.')
  }
}

function isValidAllOptions(commandArgs: CommandArgs) {
  if (!commandArgs.label || !commandArgs.dir) {
    throw new Error(
      `Invalid Parameters. ${commandArgs.label} ${commandArgs.dir}`,
    );
  }
}

function isValidWithoutDir(commandArgs: CommandArgs) {
  if (!commandArgs.label) {
    throw new Error(
      `Invalid Parameters. ${commandArgs.label} ${commandArgs.dir}`,
    );
  }
}

function showAllCommands() {
  console.log("portal go     [label]");
  console.log("portal add    [label] [dir]");
  console.log("portal remove [label]");
  console.log("portal list");
}

main(command, commandArgs);
