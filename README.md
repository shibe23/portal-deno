# Portal

Change Directory Helper by Deno.

# Install

```
git clone git@github.com:shibe23/portal-deno.git
sh shell/install.sh
```

Or setting manually.

```
git clone git@github.com:shibe23/portal-deno.git

echo source `pwd`/shell/portal.sh >> ~/.bashrc
touch ~/.portal
cp `pwd`/bin/portal-exec /usr/local/bin/portal-exec
```

# Usage

## portal add [label] [dir]

Add `label` and `dir` on `~/.portal` file.

```
portal add dev /path/to/your/directory
```

## portal go [label]

Change your current directory.

```
portal go dev
```

## portal remove [label]

Remove `label` and `dir` from your `~/.portal`

```
portal remove dev
```

## portal list

Show `~/.portal`

```
portal list

# dev /path/to/your/directory
```

# How to develop

## run

```
deno run --allow-env --allow-read --allow-write src/main.ts [command] [label] [dir]
```

## build

```
deno --unstable compile --lite --allow-env --allow-read --allow-write --output ./bin/portal-exec src/main.ts
```

# LICENCE

MIT
