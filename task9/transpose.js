//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if (input.length === 0) return [];

  const maxLength = Math.max(...input.map(str => str.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    let newRow = '';
    for (let j = 0; j < input.length; j++) {
      if (i < input[j].length) {
        newRow += input[j][i];
      } else {
        newRow += ' ';
      }
    }
    result.push(newRow);
  }

  return result;
};
