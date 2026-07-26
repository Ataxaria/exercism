/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return "You forgot to set the timer.";
  }
  return remainingTime ? "Not done, please wait." : "Lasagna is done.";
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  return {
    noodles: layers.filter((layer) => layer === "noodles").length * 50,
    sauce: layers.filter((layer) => layer === "sauce").length * 0.2,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, numberOfPortions) {
  numberOfPortions = numberOfPortions / 2;
  const obj = {};
  for (let ingredient in recipe) {
    obj[ingredient] = recipe[ingredient] * numberOfPortions;
  }
  return obj;
}