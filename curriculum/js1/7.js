/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, start=2) => {
  if (start === a) return true;
  if (a % start === 0 || a===1) return false;
  return solution(a, start+1);
};

module.exports = {
  solution,
};
