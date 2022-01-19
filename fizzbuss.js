const fizzbuss = (num) => {
  if (num === 0) return 0;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuss'
  if (num % 3 === 0) return 'fizz'
  if (num % 5 === 0) return 'buss'

  return num
}

const foo = (limit) => {
  // for (let i = 0; i <= limit; i++) {
  //   console.log(fizzbuss(i))
  // }

  const array = Array(limit).fill(0).map((e, i) => e + i)
  array.forEach(e => console.log(fizzbuss(e)))
}

foo(16)

module.exports = fizzbuss