const fs = require('fs');
const path = require('path');
const program = require('commander');
const CaesarCipherTransformer = require('./utils/caesar-cipher-transformer');

program.storeOptionsAsProperties(false).passCommandToAction(false);
program.version('0.0.1');

program
  .requiredOption('-a, --action <type>', 'an action encode/decode')
  .requiredOption('-s, --shift <shift>', 'a shift')
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file');

program.parse(process.argv);

const { action, shift, input, output } = program.opts();

const pathToRead = path.resolve(__dirname, './input.txt');
const pathToWrite = path.resolve(__dirname, './output.txt');

// const read = fs.createReadStream(pathToRead);
const read = process.stdin;
const transform = new CaesarCipherTransformer(action, shift);
const write = process.stdout;
// const write = fs.createWriteStream(pathToWrite);

read.pipe(transform).pipe(write);
