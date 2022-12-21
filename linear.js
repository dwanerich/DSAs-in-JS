// time O(n)
const linear = (array,val) => {
  array.map((num, index) => {if (num === val) console.log("number:",num, "index:",index)})
}

let array = [1,2,3,4,5]

linear(array,8)
