const fizzBuzz = (n = 1) => {
  if (n > 100) return

  let str = ''

  if (n % 3 === 0) str += 'Fizz'
  if (n % 5 === 0) str += 'Buzz'

  console.log(str || n)

  fizzBuzz(n + 1)
}
