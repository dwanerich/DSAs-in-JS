let maxSubArraySum = (arr, num) => {
    let tempSum = 0;
    let maxSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++){
        maxSum += arr[i]
    }
   tempSum = maxSum;
   for (let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
   }
   console.log(maxSum)
}
// dont' forget to pass in 2 arguments
r1 = [1,3,6,4,5]
maxSubArraySum(r1, 3)
