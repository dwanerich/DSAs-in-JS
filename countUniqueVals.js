let countUniqueVals = (arr) => {
    if(arr.length === 0) {
        return 0
    }
    let i = 0
    for(let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i +1
}

s1 = [1,2,3,3,4,5,7,9,6,6,6, -1]

countUniqueVals(s1)