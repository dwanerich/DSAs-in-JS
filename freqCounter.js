let freqCounter = (arr1, arr2) => {
   if(arr1.length !== arr2.length) {
       return false;
   }
    let freq1 = {}
    let freq2 = {}
    for (let val of arr1){
        freq1[val] = (freq1[val] || 0) + 1
    }
    for (let val of arr2){
        freq2[val] = (freq2[val] || 0) + 1
    }
    for (let key in freq1) {
        if(!(key **2 in freq2)) {
            return false
        }
        if(freq2[key ** 2] !== freq1[key]) {
            return false
        }
    }
    return true;
}

s1 = [1,3,4]
s2 = [1,9,16]

freqCounter(s1,s2)

