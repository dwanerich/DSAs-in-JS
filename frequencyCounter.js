const same = (arr1,arr2) => {
  if (arr1.length !== arr2.length) return false;

  let map1 = {}
  let map2 = {}
  for (let val of arr1){
    map1[val] ? map1[val]++ : map1[val] = 1
  }
  for (let val of arr2){
    map2[val] ? map2[val]++ : map2[val] = 1
  }

  for (let key in map1){
    if (!(key **2) in map2){
      return false
    }
    if (map2[key **2] !== map1[key]){
      return false
    }
  }
  return true;
}

a1 = [1,2,3]
a2 = [9,4,1,10]

console.log(same(a1,a2))
