// let validAnagramBrute = (str1,str2) => {
//     let original = str1.split('').sort().join()
//     let copy = str2.split('').sort().join()
//     return original === copy
// }

    let validAnagram = (str1,str2) => {
        if (str1.length !== str2.length) {
            return false;
        }
    let results = {}

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        results[letter] ? results[letter] : results[letter] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!results[letter]) {
            return false
        }
        else {
            results[letter] -= 1;
        }
    }
        return true;
    }

validAnagram('ingpjmu', 'jumping')