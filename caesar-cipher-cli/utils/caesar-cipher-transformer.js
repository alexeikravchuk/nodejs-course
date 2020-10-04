const stream = require('stream');
const shiftChars = require('./shift-chars');

class CaesarCipherTransformer extends stream.Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = shift;
  }

  _transform(data, encoding, callback) {
    let shift = this.shift;
    if (this.action === 'decode') shift *= -1;
    const line = shiftChars(data.toString(), shift);
    this.push(line);
    callback();
  }
}

module.exports = CaesarCipherTransformer;
