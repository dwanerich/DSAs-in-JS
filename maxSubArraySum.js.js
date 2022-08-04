let maxSubArraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    console.log('first round:', maxSum)
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// dont' forget to pass in 2 arguments
r1 = [1,9,3,8,2,0,6,4,5]
maxSubArraySum(r1, 2)
