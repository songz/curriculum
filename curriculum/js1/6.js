/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, start=2, sum=0) => {
  if (start === a) return sum;
  if (a % start === 0) sum += start;
  return solution(a, start+1, sum);
};

module.exports = {
  solution,
};
