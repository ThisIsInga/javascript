//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  const actions = [
    'wink', 
    'double blink', 
    'close your eyes', 
    'jump'
  ];
    
  let result = [];

  for (let i = 0; i < actions.length; i++) {
    if ((num >> i) & 1) {
      result.push(actions[i]);
    }
  }

  if ((num & 16) !== 0) {
    result.reverse();
  }

  return result;
};
