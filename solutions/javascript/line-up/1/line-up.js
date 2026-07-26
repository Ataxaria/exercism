//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  num = num.toString();
  const ordinalSuffix = num[num.length - 2] === '1' ? "th" :
    num[num.length - 1] === '1' ? "st" : 
    num[num.length - 1] === '2' ? "nd" :
    num[num.length - 1] === '3' ? "rd" : "th";
  
  return `${name}, you are the ${num + ordinalSuffix} customer we serve today. Thank you!`
};
