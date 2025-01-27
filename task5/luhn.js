//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (number) => {
  const cleaned = number.replace(/\s/g, '');
  if(cleaned.length <= 1 || /[^\d]/.test(cleaned)){
    return false;
  }

  const digits = cleaned.split('').map(Number);

  for(let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] = digits[i] * 2;
    if(digits[i] > 9){
      digits[i] -= 9;
    }
  }

  const total = digits.reduce((sum, digit) => sum + digit, 0);

  return total % 10 === 0;
};
