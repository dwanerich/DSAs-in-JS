// let userLeft = false
// let userJoined = false

// function watch101CallBack(callback, errorCallBack) {
//     if (userLeft) {
//         errorCallBack({
//             name: 'John Doe',
//             message: 'Sorry to see you leave'
//         })
//     } else if (userJoined) {
//         errorCallBack({
//             name: 'jane doe',
//             message: 'You made the right decision staying'
//         })
//     } else {
//         callback('Something gotta give')
//     }
// }

// watch101CallBack((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + " " + error.message)
// })
