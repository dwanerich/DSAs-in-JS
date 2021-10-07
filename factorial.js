// factorial aka 3! means: 3 x 2 x 1

let factorial = (num) => {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total
}

factorial(2)

let iterativeFactor = (num) => {
    if (num === 1) return 1;
    return num * iterativeFactor(num - 1)
}

// iterativeFactor(4)
