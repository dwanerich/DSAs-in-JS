let countDown = (num) => {
    if (num <= 0) {
        console.log("you have arrived");
        return
    }
    console.log(num)
    num--;
    countDown(num)
}

countDown(7)