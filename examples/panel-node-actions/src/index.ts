import { ExtensionContext } from "@flora-suite/extension";

import { initExamplePanel } from "./ExamplePanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({
    name: "Flora Panel Node Actions Example",
    initPanel: initExamplePanel,
  });
}
