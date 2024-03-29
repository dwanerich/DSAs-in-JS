// worse time O(log n) | best time O(1) only works on sorted arrays
let binarySearch = (arr, val) => {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = arr[middle];

        if (currentElement < val) {
            min = middle +1;
        }
        else if (currentElement > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1
}
// array must be sorted
let ray = [1,2,3,60,100,400,600,3000,150000]

console.log(binarySearch(ray, 80))
