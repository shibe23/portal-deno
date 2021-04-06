import {AppOptions, CommandArgs} from "./main.ts";

export async function add(value:CommandArgs, appOptions: AppOptions){
  const file = await Deno.readTextFile(appOptions.PORTAL_FILE)
  const encoder = new TextEncoder()
  const matched = file.match(new RegExp(`${value.label} `)) || []
  if (!matched.length) {
    const text = encoder.encode(`${value.label} ${value.dir}\n`)
    await Deno.writeFile(appOptions.PORTAL_FILE, text, {append: true})
    console.log(`Append portal ${value.label}`)
  }else{
    console.log(`${value.label} is already exists.`)
  }
}
