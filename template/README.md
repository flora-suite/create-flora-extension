# ${NAME}

[Flora](https://github.com/flora-suite/flora) extensions are custom code loaded by the Flora desktop application. Use them to add custom panels, message converters, and topic aliases. Extensions are authored in TypeScript with the `@flora-suite/extension` SDK.

## Develop

Extension development uses the `pnpm` package manager to install development dependencies and run build scripts.

To install extension dependencies, run `pnpm` from the root of the extension package.

```sh
pnpm install
```

To build and install the extension into your local Flora desktop app, run:

```sh
pnpm local-install
```

Open Flora (or reload it if already open). Your extension is installed and available within the app.

## Package

Extensions are packaged into `.foxe` files. These files contain the metadata (package.json) and the build code for the extension.

Before packaging, make sure to set `name`, `publisher`, `version`, and `description` fields in _package.json_. When ready to distribute the extension, run:

```sh
pnpm package
```

This command will package the extension into a `.foxe` file in the local directory.

## Publish

You can publish the extension to the public registry or privately for your organization.

Publish the resulting archive through the Flora Extension Marketplace repository.
