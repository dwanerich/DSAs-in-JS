// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// const multOf3or5 = () => {
//   let sum = 0
//   for (i = 0; i < 1000; i++) {
//     (i % 3 === 0) || (i % 5 === 0) ?
//     sum += i : null
//   }
// console.log(sum)
// }

let recursive = (sum=0,num) => {
  if (num === 0) return sum
  if((num % 3 === 0) || (num % 5 === 0)) {
    sum += num
  }
  return recursive(sum,num - 1)
}
console.log(recursive(0,100))
