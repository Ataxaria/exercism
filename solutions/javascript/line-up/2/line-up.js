//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  num = num.toString();
  let dict = {'1': "st", '2': "nd", '3': "rd"};
  const ordinalSuffix = dict[num[num.length - 1]] && !(num >= 2 && num[num.length - 2] === '1') ? dict[num[num.length - 1]] : "th";
  
  return `${name}, you are the ${num + ordinalSuffix} customer we serve today. Thank you!`;
};
