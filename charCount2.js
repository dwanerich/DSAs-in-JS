
let charCount = (str) => {

    let result = {}
    for(let i = 0; i < str.length; i++) {
        let char = str[i]
    if (result[char] > 0) {
        result[char]++;
    } else {
        result[char] = 1;
    };      
    }
    return result;
}

charCount('dwane richards')
