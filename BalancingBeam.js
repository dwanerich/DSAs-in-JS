/*
You have a number of weighted blocks for a balance scale. These blocks are put on a plate to balance against other objects to find how much they weigh. You're curious what is the smallest total weight you cannot represent with the blocks you have.

Write a function that, given a list of blocks, determines the smallest total weight that cannot be represented by the given blocks. Only consider positive integer weights. Please optimize your solution with regard to time complexity only.

Test Cases:
case_1 = [1, 1, 2, 5, 17]  # 10
case_2 = [1, 2, 4, 8, 16]  # 32. All of 1-31 can be represented
case_3 = [10, 20, 30, 40]  # 1. 10 is the smallest weight that can be represented
case_4 = [10, 5, 2, 25, 1, 2, 1]  # 22. Blocks are not necessarily sorted

How else could you test your solution? Write some additional test cases, discuss what the cases are meant to test for, and fix any problems that occur due to your new test cases.
*/

let WeightedBlocks = (array) => {
    let results = 1;

    array.sort((x, y) => { return x - y })

    //   homes.sort((x,y) => {return x.price - y.price})

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= results) {
            console.log('your results:', results += array[i])
        }
    }
    console.log(results)
    return results
}

"use strict";

const case_1 = [1, 1, 2, 5, 17];
const case_2 = [1, 2, 4, 8, 16];
const case_3 = [10, 20, 30, 40];
const case_4 = [10, 5, 2, 25, 1, 2, 1];

WeightedBlocks(case_1)
WeightedBlocks(case_2)
WeightedBlocks(case_3)
WeightedBlocks(case_4)