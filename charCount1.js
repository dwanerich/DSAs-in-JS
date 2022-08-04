let charCount = (string) => {

    results = {}

    for (let i = 0; i < string.length; i++)
    {
        let char = string[i]
            if (results[char] > 0) {
            results[char]++;
        }
            else {
            results[char] = 1
        };
    }
    return (results)
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
