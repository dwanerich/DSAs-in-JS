arr = [2,1,9,75,8]

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for (let j = i - 1; j > -1 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal;
    console.log(arr)
  }
  return arr
}
console.log(insertionSort([7,4,2,1,8]))
