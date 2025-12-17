function displayNumbers() {
    let count = 1;
    const intervalId = setInterval(() => {
        console.log(count);
        count++;
    }, 500)
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("stopp displaying numbers");

    }, 5000);
}
displayNumbers();