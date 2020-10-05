const fs = require('fs');
const path = require('path');

module.exports = function checkArgs(program) {
  program.exitOverride();

  try {
    program.parse(process.argv);
    const { action, shift, input, output } = program.opts();

    if (!action) {
      console.error(`error: action (encode/decode) is required!`);
      process.exit(1);
    }

    if (action !== 'encode' && action !== 'decode') {
      console.error(
        `error: action can only has the value "encode" or "decode"!`
      );
      process.exit(2);
    }

    if (!shift || Number.isNaN(parseInt(shift, 10))) {
      console.error('error: shift value is required and must be an integer!');
      process.exit(3);
    }

    if (input) {
      const inputPath = path.resolve(__dirname, '../', input);
      try {
        fs.accessSync(inputPath, fs.F_OK);
      } catch {
        console.error(`error: ${input} is a wrong path to input file!`);
        process.exit(4);
      }
    }

    if (output) {
      const outputPath = path.resolve(__dirname, '../', output);
      try {
        fs.accessSync(outputPath, fs.F_OK);
      } catch {
        console.error(`error: ${output} is a wrong path to output file!`);
        process.exit(5);
      }
    }
    return true;
  } catch (err) {
    console.log(err.message);
  }
};
