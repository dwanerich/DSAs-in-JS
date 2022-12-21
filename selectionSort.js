const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++){
    let lowest = i
    for (let j = i+1; j < arr.length; j++)
    if (arr[j] < arr[lowest]){
      lowest = j
    }
    let temp = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] = temp;
  }
  console.log(arr)
}

let arr1 = [1,5,4,3,8]

selectionSort(arr1)
