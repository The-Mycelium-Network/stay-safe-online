#!/usr/bin/env node

const fse = require("fs-extra");
const path = require("path");

async function preprocess() {
  try {
    const regexp = /(\/main.)\w+(.css)/;
    let fileContents = await fse.readFile(
      path.join(__dirname, "../docs/index.html"),
      "utf8"
    );

    let originalHref = regexp.exec(fileContents)[0];
    fileContents = fileContents.replace(regexp, `.${originalHref}`);

    fse.outputFile(path.join(__dirname, "../docs/index.html"), fileContents);
  } catch (error) {
    console.error(`Error reading file: ${error}`);
  }
}

preprocess();
