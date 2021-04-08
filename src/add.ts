import { CommandArgs } from "./main.ts";
import { IO } from "./lib/file.ts";

export async function add(value: CommandArgs) {
  const input = await IO.read();
  const matched = input.match(new RegExp(`${value.label} `)) || [];
  if (!matched.length) {
    await IO.write(`${value.label} ${value.dir}\n`, { append: true });
    console.log(`Append portal ${value.label}`);
  } else {
    console.log(`${value.label} is already exists.`);
  }
}
