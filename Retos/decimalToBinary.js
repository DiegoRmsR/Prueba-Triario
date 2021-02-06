/**
 * convert decimal number to binary number
 *
 * @param {number} (decimal number)
 * 
 * @returns {number} returns number in binary
 */
const decimalToBinary = num => {
  return num.toString(2)
}
console.log(decimalToBinary())


/**
 * convert decimal number to binary number
 *
 * @param {number} (positive decimal number)
 * 
 * @returns {number} returns number in binary
 */
const decimalToBinaryTwo = num => {
  let a = []
  let b = (num)

  while (b / 2) {
    a.push(Math.floor(b % 2))
    b = b / 2
  }

  return parseInt(a.reverse().join(""))
}

console.log(decimalToBinaryTwo(7))