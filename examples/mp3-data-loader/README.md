# MP3 Data Loader

This extension allows Flora to open `.mp3` files and load them as a RawAudio topic.

## Building

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
