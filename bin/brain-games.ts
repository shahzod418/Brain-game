#!/usr/bin/env node

import { createCommand } from "commander";
import userWelcome from "../src/cli";
import gameListWithDescription from "../src/game-list";

const program = createCommand();

program
  .version("version: 0.0.3", "-v, --version", "output the current version")
  .helpOption("-h, --help", "read more information")
  .description("A set of CLI arithmetic games")
  .argument("gamename")
  .action((gamename: string) => {
    if (gamename) {
      userWelcome(gamename);
    }
  });

program
  .command("list")
  .description("list of games with description")
  .action(() => {
    console.log(gameListWithDescription().join("\n"));
  });

program.parse();

const options = program.opts();
if (options.list) console.log("list");
