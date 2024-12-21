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
  if(name === 'earth'){
    let years = seconds / earthsec;
    return years.toFixed(2);
  } else if (name === 'mercury'){
    let years = seconds / mersec;
    return years.toFixed(2);
  } else if (name === 'venus'){
    let years = seconds / venussec;
    return years.toFixed(2);
  } else if (name === 'mars'){
    let years = seconds / marssec;
    return years.toFixed(2);
  } else if (name === 'jupiter'){
    let years = seconds / jupitersec;
    return years.toFixed(2);
  } else if (name === 'saturn'){
    let years = seconds / saturnsec;
    return years.toFixed(2);
  } else if (name === 'uranus'){
    let years = seconds / uranussec;
    return years.toFixed(2);
  } else if (name === 'neptune'){
    let years = seconds / neptunesec;
    return years.toFixed(2);
  }
};