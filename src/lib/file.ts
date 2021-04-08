// TODO: Windows対応
// const filePath = Deno.build.os === 'windows'
//   ? path.join(process.env.APPDATA!, 'Portal', 'portal.dat')
//   : path.join(os.homedir(), '.portal');

const filePath = `${Deno.env.get("HOME")}/.portal`;

if (!filePath) {
  throw new Error(".portal file doesn't exist.");
}

/*
* 任意のファイルに対するreaderとwriteを返す
* */

export const IO = {
  read: readfile,
  write: writefile,
};

function readfile(): Promise<string> {
  return Deno.readTextFile(filePath);
}

interface WriterOptions {
  append: boolean;
}

function writefile(data: string, options?: WriterOptions): Promise<void> {
  const encoder = new TextEncoder();
  const text = encoder.encode(data);
  return Deno.writeFile(filePath, text, options);
}
