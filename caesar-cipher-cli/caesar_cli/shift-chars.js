const alphabet = 'abcdefghijklmnopqrstuvwxyz';

module.exports = function shiftChars(line, shift) {
  const charArray = line.split('');
  shift = shift % alphabet.length;

  return charArray
    .map((char) => {
      const isUpperCase = char.toLowerCase() !== char;
      const letter = char.toLowerCase();
      if (alphabet.includes(letter)) {
        const index =
          (alphabet.indexOf(letter) + shift + alphabet.length) %
          alphabet.length;
        return isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
      }
      return char;
    })
    .join('');
};
