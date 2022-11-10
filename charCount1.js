let charCount = (str) => {

    results = {}

    for (char of str) {
        if (/[a-z0-9]/.test(char)) {
            (results[char] > 0) ? results[char]++ :
            results[char] = 1
        }
    }
    console.log(results)
}

charCount('yessenia perez')

// REFACTOR

// let charCount = (str) => {

//     let results = {};

//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (results[char] > 0) {
//                 results[char]++;
//             } else {
//                 results[char] = 1;
//             };
//         }
//     }
//     return results;
// }
