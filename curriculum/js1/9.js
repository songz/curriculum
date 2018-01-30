/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, result=a+1) => {
  if (result % 7 === 0) return result;
  return solution(a, result+1);
};

module.exports = {
  solution,
};
