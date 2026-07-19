import { ExtensionContext } from "@flora-suite/extension";
import { LocationFix } from "@flora-suite/schemas";

type MyGps = {
  lat: number;
  lon: number;
};

// activate is the entry point for our entire extension.
export function activate(extensionContext: ExtensionContext): void {
  // Register a message converter from our custom Gps message type to the standard
  // `foxglove.LocationFix` schema. Schema identifiers remain protocol identifiers;
  // they are independent of Flora's package and product names.
  // This will enable Flora to visualize our custom Gps message in the Map panel.
  extensionContext.registerMessageConverter({
    fromSchemaName: "My.Gps",
    toSchemaName: "foxglove.LocationFix",
    converter: (msg: MyGps): Partial<LocationFix> => {
      return {
        latitude: msg.lat,
        longitude: msg.lon,
      };
    },
  });
}
