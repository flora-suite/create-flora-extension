# @flora-suite/create-flora-extension

Create, build, package, locally install, and publish Flora extensions.

## Quick start

Flora extensions require Node.js 22+ and pnpm 10+.

```sh
pnpm dlx @flora-suite/create-flora-extension my-panel
cd my-panel
pnpm install
pnpm local-install
```

`local-install` copies the built extension to `~/.flora/extensions`. Set
`FLORA_EXTENSIONS_DIR` to use an isolated directory in CI or local testing.

## Generated project commands

```sh
pnpm build          # development bundle
pnpm local-install  # production bundle and install into Flora
pnpm package        # create a .foxe archive
pnpm lint
pnpm test
```

Generated extensions use the stable public APIs from `@flora-suite/extension`. The archive format
is `.foxe` for compatibility with the Flora desktop loader.

## Publish an extension

Build and upload a release asset first, then generate verified marketplace metadata:

```sh
pnpm flora-extension publish \
  --foxe https://github.com/flora-suite/flora-extension-marktplace/releases/download/<tag>/<asset>.foxe
```

The command requires HTTPS and a successful download before calculating SHA-256. Commit the output
with the extension source in [flora-extension-marktplace](https://github.com/flora-suite/flora-extension-marktplace).

## Development

This repository is a pnpm workspace containing the generator and the public SDK packages.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm build
pnpm lint:ci
pnpm test
```

The `examples/` directory covers panels, message conversion, topic aliasing, web workers, and data
loaders. Each example is maintained as Flora source code, not as an external fork.

## Release

Release `@flora-suite/extension`, `@flora-suite/schemas`, and
`@flora-suite/create-flora-extension` from a reviewed GitHub Release. The publish workflow uses
npm provenance and public access for the `@flora-suite` scope.
