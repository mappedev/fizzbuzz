const fizzbuss = require("./fizzbuss.js")

describe('Testing Fizzbuss', () => {
  test('Should return 0 if the number is 0', () => {
    const expected = 0
    const result = fizzbuss(0)
    expect(result).toBe(expected)
  })

  test('Should return fizz if the number is multiple of 3', () => {
    const expected = 'fizz'
    const result = fizzbuss(6)
    expect(result).toBe(expected)
  })

  test('Should return buss if the number is multiple of 5', () => {
    const expected = 'buss'
    const result = fizzbuss(10)
    expect(result).toBe(expected)
  })

  test('Should return fizzbuss if the number is multiple of 3 and 5', () => {
    const expected = 'fizzbuss'
    const result = fizzbuss(15)
    expect(result).toBe(expected)
  })
})