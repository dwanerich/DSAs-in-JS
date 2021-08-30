
let validAnagram = (str1, str2) => {
    
    if (str1.length !== str2.length) {
        return false;
    }

     const results = {};
    
    for (let i = 0; i < str1.length; i++){
        let letter = str1[i];
        results[letter] ? results[letter] += 1 : results[letter] = 1;
        }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!results[letter]) {
            return false
        }
        else {
            results[letter] -= 1;
        }
    }
         return true
    }

validAnagram('jimmy', 'chris')