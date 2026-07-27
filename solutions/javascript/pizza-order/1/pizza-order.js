/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const menu = { Margherita: 7, Caprese: 9, Formaggio: 10, ExtraSauce: 1, ExtraToppings: 2 };
  let price = 0;
  for (const arg of arguments) {
    price += menu[arg];
  }
  return price;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let sum = 0;
  for (let order of pizzaOrders) {
    const { pizza, extras } = order;
    sum += pizzaPrice(pizza, ...extras);
  }
  return sum;

  // Recursive code fails due to hitting the limit of the call stack
  if (pizzaOrders.length === 0) {
    return 0;
  }
  const { pizza, extras } = pizzaOrders.pop();
  return pizzaPrice(pizza, ...extras) + orderPrice(pizzaOrders);
}
