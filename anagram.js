
let validAnagram = (str1, str2) => {

    if (str1.length !== str2.length) {
        return false;
    }

     const results = {};

    for (let val of str1){
        let letter = str1[val];
        results[letter] ? results[letter] += 1 : results[letter] = 1;
        }

    for (let val of str2) {
        let letter = str2[val];
        (!results[letter]) ? false : results[letter] -= 1;
    }
         return true
    }

console.log(validAnagram('hello world', 'Worldhello '))
