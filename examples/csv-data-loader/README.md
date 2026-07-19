# CSV Data Loader

This is a simple [Flora](https://github.com/flora-suite/create-flora-extension) [extension](https://github.com/flora-suite/create-flora-extension) that loads a CSV file.
The file must have a column called `timestamp_nanos` in order to be read.

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

The file sample_data.csv provides some simple sample data you can use to test the extension.
