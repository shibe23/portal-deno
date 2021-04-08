import { IO } from "./lib/file.ts";

export async function list() {
  console.log(await IO.read());
}
