let array = [3,5,7,-1,2,9]
let targetVal = 7

let twoNumSum = (array, targetVal) => {
let results = {}
for(let result of array) {
    let num1 = targetVal - result
    if (num1 in results) {
        console.log([num1, result])
    } else {
        results[result] = true;
    }
}
console.log([])
}

twoNumSum(array,targetVal)


