//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  const maxLength = Math.max(...input.map((str) => str.length));

  const normalizedInput = input.map((str) => str.padStart(maxLength, ' '));

  const result = [];

  for (let col = 0; col < maxLength; col++) {
    let newRow = '';
    for (let row = 0; row < normalizedInput.length; row++) {
      newRow += normalizedInput[row][col];
    }
    result.push(newRow);
  }

  return result;
};
