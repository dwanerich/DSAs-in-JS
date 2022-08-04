let arr = [
  ['a','b'],
  ['c','d','e'],
  ['f','g','h']
];

let str = ''

for (let i = 0; i < arr.length; i++) {
  let subarray = arr[i]

  for (let j = 0; j < subarray.length; j++) {
    str += subarray[j]
  }
}
console.log(str)

