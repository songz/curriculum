/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, start=1, result=-1) => {
  if (start > a || start > b) return result;
  if (a % start === 0 && b % start === 0) result = start;
  return solution(a, b, start + 1, result);
};

module.exports = {
  solution,
};
