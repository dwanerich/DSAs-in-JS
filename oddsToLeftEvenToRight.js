let nums = [1,2,3,4,5,6];
let results = [];


let oddsToLeftEvensToRight = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            results.unshift(arr[i])
        }
        if (arr[i] % 2 === 0) {
            results.push(arr[i])
        }
    }
    console.log(results)
}

console.log(oddsToLeftEvensToRight(nums))