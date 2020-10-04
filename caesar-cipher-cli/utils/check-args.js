const fs = require('fs');
const path = require('path');

module.exports = function checkArgs(program) {
  program.exitOverride();

  try {
    program.parse(process.argv);
    const { action, shift, input, output } = program.opts();

    if (input) {
      const inputPath = path.resolve(__dirname, '../', input);
      fs.access(inputPath, fs.F_OK, (err) => {
        if (err) {
          console.log(`${input} is a wrong path to input file!`);
          process.exit(0);
        }
      });
    }

    return true;
  } catch (err) {
    console.log(err.message);
  }
};
