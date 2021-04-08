import type { CommandArgs } from "./main.ts";
import { IO } from "./lib/file.ts";

export async function go(value: CommandArgs) {
  const input = await IO.read();

  let lines = input.split("\n");
  const matchedIndex = lines.findIndex((line) => {
    return line.match(new RegExp(`^${value.label} `));
  });
  if (matchedIndex < 0) {
    console.log("No matched label.");
    return;
  }
  const path = lines[matchedIndex].split(" ").pop();
  console.log(path);
  Deno.exit(2);
}
