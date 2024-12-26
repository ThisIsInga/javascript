//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let mersec = 31557600 * 0.2408467;
let venussec = 31557600 * 0.61519726;
let earthsec = 31557600;
let marssec = 31557600 * 1.8808158;
let jupitersec = 31557600 * 11.862615;
let saturnsec = 31557600 * 29.447498;
let uranussec = 31557600 * 84.016846;
let neptunesec = 31557600 * 164.79132;
export const age = (name, seconds) => {
  let years;
  if(name === 'earth'){
    years = seconds / earthsec;
  } else if (name === 'mercury'){
    years = seconds / mersec;
  } else if (name === 'venus'){
    years = seconds / venussec;
  } else if (name === 'mars'){
    years = seconds / marssec;
  } else if (name === 'jupiter'){
    years = seconds / jupitersec;
  } else if (name === 'saturn'){
    years = seconds / saturnsec;
  } else if (name === 'uranus'){
    years = seconds / uranussec;
  } else if (name === 'neptune'){
    years = seconds / neptunesec;
  }
  return years.toFixed(2);
};