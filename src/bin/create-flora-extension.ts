#!/usr/bin/env node
import { program } from "commander";

import { createCommand } from "..";

program
  .description(
    "Creates a new Flora extension. Docs: https://github.com/flora-suite/flora/tree/main/packages/suite",
  )
  .showHelpAfterError()
  .argument("<name>", "Name for the new extension")
  .option("--skip-install", "Create source files without installing dependencies")
  .allowExcessArguments(false)
  .action(async (name: string, options: { skipInstall?: boolean }) => {
    await createCommand({ name, installDependencies: !options.skipInstall });
  });

program.parse(process.argv);
