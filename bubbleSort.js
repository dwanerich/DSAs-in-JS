const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--){
    noSwaps = true;
    for (let j = 0; j < i - 1; j++)
    if (arr[j] > arr[j + 1]){
      let temp = arr[j];
      arr[j] = arr[j +1];
      arr[j + 1] = temp;
      noSwaps = false;
    }
    if(noSwaps) break;
  }
  console.log(arr)
}


// const swap = (arr1,idx1,idx2) => {
//   console.log(
//     [arr1[idx1], arr1[idx2] = arr1[idx2], arr1[idx1]]
//   )
// }

// const swap1 = (arr1, idx1, idx2) => {
//   let temp = arr1[idx1]
//   arr1[idx1] = arr1[idx2]
//   arr1[idx2] = temp
// }

let arr1 = [1,5,4,3,8]

bubbleSort(arr1)
