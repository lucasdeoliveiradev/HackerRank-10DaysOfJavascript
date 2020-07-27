/*
 * Create the function factorial here
 */

function factorial (n) {
  let acc = 1
  for (let x = n; x > 1; x--) {
      acc = acc * x
  }
  return acc
}