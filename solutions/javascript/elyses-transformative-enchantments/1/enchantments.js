// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export const seeingDouble = (deck) => deck.map((value) => value * 2);

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export const threeOfEachThree = (deck) => {
  const threes = [3, 3, 3];
  return deck.reduce(
    (accumulator, currentValue, currentIndex) => {
      accumulator.push(...(currentValue === 3 ? threes : [currentValue]))
      return accumulator;
    },
    []
  );
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export const middleTwo = (deck) => deck.slice(4, 6);

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */
export const sandwichTrick = (deck) => {
  deck.splice(Math.floor((deck.length - 1) / 2), 0, deck.pop(), deck.shift());
  return deck;
};

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export const twoIsSpecial = (deck) => deck.filter((element) => element === 2);

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export const perfectlyOrdered = (deck) => deck.sort((a, b) => a - b);

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export const reorder = (deck) => deck.reverse();
