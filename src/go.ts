import type {AppOptions, CommandArgs} from "./main.ts";

export async function go (value:CommandArgs, appOptions: AppOptions){
  const file = await Deno.readTextFile(appOptions.PORTAL_FILE)

  let lines = file.split('\n')
  const matchedIndex = lines.findIndex((line) => {
    return line.match(new RegExp(`^${value.label} `))
  })
  if (matchedIndex < 0){
    console.log('No matched label.')
    return
  }
  const path = lines[matchedIndex].split(' ').pop()
  console.log(path)
  Deno.exit(2)
}
