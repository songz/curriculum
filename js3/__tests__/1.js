/* global describe it expect */

let solution = require('../1').solution

describe('given array of strings(keys) and object, return an array of values', () => {
  it('should return ["arrogant", "naive"]', () => {
    const result = solution(['ironman', 'spiderman'], { ironman: 'arrogant', blackpanther: 'brave', spiderman: 'naive' })
    expect(result.sort()).toEqual(['arrogant', 'naive'].sort())
  })
  it('should return ["goat", "mamba"]', () => {
    const result = solution(['jordan', 'kobe'], { jordan: 'goat', kobe: 'mamba', lebron: 'pretender' })
    expect(result.sort()).toEqual(['goat', 'mamba'].sort())
  })
  it('should return ["greatest shooter of all time", "Greek freak"]', () => {
    const result = solution(['curry', 'giannis'], { curry: 'greatest shooter of all time', harden: 'flopper', giannis: 'Greek freak' })
    expect(result.sort()).toEqual(['greatest shooter of all time', 'Greek freak'].sort())
  })
  it('should return ["pancakes", "steak"]', () => {
    const result = solution(['breakfast', 'dinner'], { breakfast: 'pancakes', lunch: 'sandwhich', dinner: 'steak' })
    expect(result.sort()).toEqual(['pancakes', 'steak'].sort())
  })
})
