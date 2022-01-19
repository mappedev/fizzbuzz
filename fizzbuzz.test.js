const fizzbuzz = require("./fizzbuzz.js")

describe('Testing Fizzbuzz', () => {
  test('Should return 0 if the number is 0', () => {
    const expected = 0
    const result = fizzbuzz(0)
    expect(result).toBe(expected)
  })

  test('Should return fizz if the number is multiple of 3', () => {
    const expected = 'fizz'
    const result = fizzbuzz(6)
    expect(result).toBe(expected)
  })

  test('Should return buzz if the number is multiple of 5', () => {
    const expected = 'buzz'
    const result = fizzbuzz(10)
    expect(result).toBe(expected)
  })

  test('Should return fizzbuzz if the number is multiple of 3 and 5', () => {
    const expected = 'fizzbuzz'
    const result = fizzbuzz(15)
    expect(result).toBe(expected)
  })
})