# ndjson flora data loader example

## A Flora Data Loader

This is a simple [Flora](https://github.com/flora-suite/create-flora-extension) [extension](https://github.com/flora-suite/create-flora-extension) that demonstrates loading a custom file format.

---

Install rust with [rustup](https://www.rust-lang.org/tools/install), then install wasm32 support:

```
rustup toolchain install 1.85.0
rustup target add wasm32-unknown-unknown --toolchain 1.85.0
```

Then to build the rust code and generate the extension file:

```
pnpm install
pnpm package
```

These steps will produce a `.foxe` file you can install as an extension from the Flora settings page.

Once you have installed this extension, you can load files with a `.ndjson` extension such as the
`example.ndjson` file included in this directory.
