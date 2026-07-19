import { ExtensionContext } from "@flora-suite/extension";

import { initExamplePanel } from "./ExamplePanel";

export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerPanel({ name: "Monaco Editor", initPanel: initExamplePanel });
}
