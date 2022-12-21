// time o(N) | space O(1)
let ternarySumZero = (arr) => {
    let l = 0; r = arr.length - 1;
    while(l < r){
        let sum = arr[l] + arr[r];
        if (sum === 0) return [arr[l], arr[r]];
        (sum > 0) ? r-- : l++
    }
}

sample = [-4,-2,2,3]
console.log(ternarySumZero(sample))
