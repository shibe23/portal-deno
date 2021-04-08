import { CommandArgs } from "./main.ts";
import { IO } from "./lib/file.ts";

export async function remove(value: CommandArgs) {
  const input = await IO.read();

  let lines = input.split("\n");
  const matchedIndex = lines.findIndex((line) => {
    return line.match(new RegExp(`^${value.label} `));
  });
  if (matchedIndex < 0) {
    console.log("No matched label.");
    return;
  }
  lines.splice(matchedIndex, 1);
  await IO.write(lines.join("\n"));
  console.log(`Removed ${value.label}`);
}
