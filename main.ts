const [command, label, dir] = Deno.args
type Command = string | null;

// TODO: Windows対応
// const filePath = Deno.build.os === 'windows'
//   ? path.join(process.env.APPDATA!, 'Portal', 'portal.dat')
//   : path.join(os.homedir(), '.portal');

const filePath = import.meta.url

export interface CommandArgs {
  label: string | null,
  dir: string | null
}

const commandArgs: CommandArgs = {
  label,
  dir
}

export interface AppOptions {
  PORTAL_FILE: string
}

const appOptions = {
  PORTAL_FILE: filePath
}

async function main (command: Command, commandArgs: CommandArgs, appOptions: AppOptions) {
  if (!command) {
    return showAllCommands()
  }
  switch (command) {
    case 'go':
      // go(commandArgs, appOptions)
      break;
    case 'add':
      // add(commandArgs, appOptions)
      break;
    case 'edit':
      // edit(commandArgs, appOptions)
      break;
    case 'remove':
      // remove(commandArgs, appOptions)
      break;
    case 'list':
      // list(appOptions)
      break;
  }
}

function showAllCommands(){
  console.log("portal go     [label]")
  console.log("portal add    [label] [dir]")
  console.log("portal remove [label]")
  console.log("portal list")
}

main(command, commandArgs, appOptions)
