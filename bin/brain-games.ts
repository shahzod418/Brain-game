#!/usr/bin/env node

import { createCommand } from "commander";
import userWelcome from "../src/cli";

const program = createCommand();

program
  .version("version: 0.0.3", "-v, --version", "output the current version")
  .helpOption("-h, --help", "read more information")
  .description("A set of CLI arithmetic games")
  .option("-l, --list", "list of games with description")
  .argument("gamename")
  .action((gamename: string) => {
    if (gamename) {
      userWelcome(gamename);
    }
  })
  .parse();
