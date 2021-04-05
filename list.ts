import {AppOptions} from "./main.ts";

export async function list(appOptions: AppOptions) {
  const file = await Deno.readTextFile(appOptions.PORTAL_FILE)
  console.log(file)
}

