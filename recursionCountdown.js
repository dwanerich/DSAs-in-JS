let countDown = (n) => {
    if (n === 0) {
        console.log("you did it king")
        return;
    }

    console.log(n)
    countDown(n -1)
}

countDown(5)

// let pray = () => {
//     console.log("prayers first thing")
// }

// let takeShower = () => {
//     console.log('peppermint lather hot shower')
// }

// let cookFood = () => {
//     let items = ['toast', 'tea', 'fruit', 'smoothie']
//     return items[Math.floor(Math.random() * items.length)]
// }

// let eatBreakfast = () => {
//     let meal = cookFood();
//     console.log("having " + `${meal}` + " this morning")
// }

// let wakeUp = () => {
//     pray()
//     takeShower()
//     eatBreakfast()
//     console.log('out the door now, xo')
// }

// wakeUp()
