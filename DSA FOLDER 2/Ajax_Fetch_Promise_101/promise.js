let p = new Promise((resolve, reject) => {
    let a = 1 + 8
    if (a === 2) {
        resolve('PASSED')
    }
    else {
        reject('FAILED')
    }
})
p.then((message) => {
    console.log("you're in then section " + message)
}).catch((message) => {
    console.log('catching you error out ' + message)
})


