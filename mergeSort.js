const mergeSort = () => {
  let i = 0;
  let j = 0;
  let results = []

  while(i < arr1.length && j < arr2.length){
    if (arr2[j] >= arr1[i]){
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while(j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  console.log(results)
}


let arr1 = [5,10,15,20]
let arr2 = [1,2,3,4]

mergeSort(arr1, arr2)
