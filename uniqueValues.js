const uniqueValues = (arr) => {
    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        console.log(i,j)
    }
    return i+1
        }

let nums = [1,1,2] // should return 4 as 1,2,3,4
console.log(uniqueValues(nums))
