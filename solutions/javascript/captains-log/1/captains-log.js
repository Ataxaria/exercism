// @ts-check

function getRandomInRange(min, max, inclusive = false) {
  return min + Math.random() * (max - min + (inclusive ? 1 : 0));
}

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${Math.floor(getRandomInRange(1000, 9999, true))}`;
}
// [0, 1) * 8999 = [0, 8999) + 1000 = [1000, 9999)

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return getRandomInRange(41000, 42000);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetaryClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  return planetaryClasses[Math.floor(getRandomInRange(0, planetaryClasses.length))];
}
