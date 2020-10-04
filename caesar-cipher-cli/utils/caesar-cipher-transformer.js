const stream = require('stream');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

class CaesarCipherTransformer extends stream.Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = shift;
  }

  _transform(data, encoding, callback) {
    const charArray = data.toString().split('');
    let shift = this.shift % alphabet.length;
    if (this.action === 'decode') shift *= -1;

    const line = charArray
      .map((char) => {
        const isUpperCase = char.toLowerCase() !== char;
        const letter = char.toLowerCase();
        if (alphabet.includes(letter)) {
          const index = (alphabet.indexOf(letter) + shift + alphabet.length) % alphabet.length;
          return isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
        }
        return char;
      })
      .join('');

    this.push(line);

    callback();
  }
}

module.exports = CaesarCipherTransformer;
