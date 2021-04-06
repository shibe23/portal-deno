import {AppOptions, CommandArgs} from "./main.ts";

export async function edit(value:CommandArgs, appOptions: AppOptions){
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
  lines[matchedIndex] = `${value.label} ${value.dir}`
  await Deno.writeFile(appOptions.PORTAL_FILE, encoder.encode(lines.join('\n')))
  console.log(`Edited ${value.label} ${value.dir}`)
}
