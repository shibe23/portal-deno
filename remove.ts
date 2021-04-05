import {AppOptions, CommandArgs} from "./main.ts";

export async function remove(value:CommandArgs, appOptions: AppOptions){
  if (!value.label) {
    throw new Error(`Invalid label. ${value.label}`)
  }
  const file = await Deno.readTextFile(appOptions.PORTAL_FILE)
  const encoder = new TextEncoder()

  let lines = file.split('\n')
  const matchedIndex = lines.findIndex((line) => {
    return line.match(new RegExp(`^${value.label} `))
  })
  if (matchedIndex < 0){
    console.log('No matched label.')
    return
  }
  lines.splice(matchedIndex, 1)
  await Deno.writeFile(appOptions.PORTAL_FILE, encoder.encode(lines.join('\n')))
  console.log(`Removed ${value.label}`)
}
