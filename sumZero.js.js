let naiveSumZero = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

let sumZero = (arr) => {
    let l = 0
    let r = arr.length - 1
    while(l < r) {
        let sum = arr[l] + arr[r];
        if(sum === 0) {
            return [arr[l], arr[r]];
        }
        else if (sum > 0) {
            r--;
        } else {
            l++;
        }
    }
}
sample = [-3,-2, 0, 1, 2, 3]

sumZero(sample)
