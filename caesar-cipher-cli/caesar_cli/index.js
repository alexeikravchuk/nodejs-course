const fs = require('fs');
const path = require('path');
const program = require('commander');
const CaesarCipherTransformer = require('./transformer');
const checkArgs = require('./args-validator');

program.storeOptionsAsProperties(false).passCommandToAction(false);
program.version('0.0.1');

program
  .option('-a, --action <type>', 'an action encode/decode')
  .option('-s, --shift <shift>', 'a shift', false)
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file');

if (checkArgs(program)) {
  const { action, shift, input, output } = program.opts();

  const read = input
    ? fs.createReadStream(path.resolve(__dirname, '../', input))
    : process.stdin;
  const transform = new CaesarCipherTransformer(action, shift);
  const write = output
    ? fs.createWriteStream(path.resolve(__dirname, '../', output), {
        flags: 'a',
      })
    : process.stdout;

  read.pipe(transform).pipe(write);
}
