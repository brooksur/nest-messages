class FizzBuzz {
  static print(n) {
    let str = ''

    if (n % 3 === 0) str += 'Fizz'
    if (n % 5 === 0) str += 'Buzz'

    console.log(str || n)
  }

  static recursive(n = 1) {
    if (n > 100) return
    this.print(n)
    this.recursive(n + 1)
  }

  static iterative() {
    for (let n = 1; n <= 100; n++) {
      this.print(n)
    }
  }
}

console.log(typeof FizzBuzz)

let startTime = Date.now()
FizzBuzz.recursive()
console.log('Recursive:', Date.now() - startTime)
startTime = Date.now()
FizzBuzz.iterative()
console.log('Iterative:', Date.now() - startTime)
