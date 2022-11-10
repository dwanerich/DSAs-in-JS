// SLIDING WINDOW

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

arr = [2,5,3,7,5,9,1,6,8]

console.log(maxSubarraySum(arr, 3))














// function maxSubarraySum(arr, num) {
//     if (num > arr.length) {
//         return null;
//     }
//     let max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i ++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//         temp += arr[i + j];
//     }
//     if (temp > max) {
//         max = temp;
//     }
// }
//     return max;
// }