import { CommandArgs } from "./main.ts";
import { IO } from "./lib/file.ts";

export async function edit(value: CommandArgs) {
  const input = await IO.read();
  let lines = input.split("\n");
  const matchedIndex = lines.findIndex((line) => {
    return line.match(new RegExp(`^${value.label} `));
  });
  if (matchedIndex < 0) {
    console.log("No matched label.");
    return;
  }
  lines[matchedIndex] = `${value.label} ${value.dir}`;
  await IO.write(lines.join("\n"));
  console.log(`Edited ${value.label} ${value.dir}`);
}
