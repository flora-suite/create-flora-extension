/** Public, runtime-free API contract implemented by Flora Desktop. */

export type Immutable<T> = T;

export type Time = { sec: number; nsec: number };

export type Topic = {
  name: string;
  schemaName?: string;
  convertibleTo?: readonly string[];
};

export type MessageEvent<T = unknown> = {
  topic: string;
  schemaName: string;
  receiveTime: Time;
  publishTime?: Time;
  message: T;
};

export type Subscription = {
  topic: string;
  convertTo?: string;
  preload?: boolean;
};

export type RenderState = {
  topics?: Topic[];
  currentFrame?: MessageEvent[];
  allFrames?: MessageEvent[];
  colorScheme?: "light" | "dark";
  [key: string]: unknown;
};

export type PanelExtensionContext = {
  readonly panelElement: HTMLDivElement;
  readonly initialState: unknown;
  watch(field: keyof RenderState): void;
  subscribe(topics: readonly string[] | readonly Subscription[]): void;
  unsubscribeAll(): void;
  saveState(state: Partial<unknown>): void;
  callService?: (service: string, request: unknown) => Promise<unknown>;
  updatePanelSettingsEditor(settings: SettingsTree): void;
  onRender?: (renderState: Immutable<RenderState>, done: () => void) => void;
};

export type SettingsTree = {
  nodes: Record<string, SettingsTreeNode>;
  actionHandler: (action: SettingsTreeAction) => void;
};

export type SettingsTreeNode = {
  label?: string;
  fields?: Record<string, unknown>;
  children?: Record<string, SettingsTreeNode>;
  actions?: unknown[];
};

export type SettingsTreeAction = {
  action: string;
  payload: { path: readonly string[]; [key: string]: unknown };
};

export type ExtensionPanelRegistration = {
  name: string;
  initPanel: (context: PanelExtensionContext) => void | (() => void);
};

export type RegisterMessageConverterArgs<Src> = {
  fromSchemaName: string;
  toSchemaName: string;
  converter: (message: Src, event: Immutable<MessageEvent<Src>>) => unknown;
};

export type TopicAliasFunction = (args: {
  topics: Topic[];
  globalVariables: Readonly<Record<string, unknown>>;
}) => { name: string; sourceTopicName: string }[];

export type ExtensionContext = {
  readonly mode: "production" | "development" | "test";
  registerPanel(params: ExtensionPanelRegistration): void;
  registerMessageConverter<Src>(args: RegisterMessageConverterArgs<Src>): void;
  registerTopicAliases(aliasFunction: TopicAliasFunction): void;
};

export namespace Experimental {
  export type DataLoaderRegistration = {
    type: "file";
    wasmUrl: string;
    supportedFileType: string;
    supportsMultiFile?: boolean;
  };

  export type ExtensionContext = {
    registerDataLoader(registration: DataLoaderRegistration): void;
  };
}
