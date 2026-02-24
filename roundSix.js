function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function asyncCounter() {
    let numbers = [];
    for (let i = 1; i <= 5; i++) {
        await delay(1000);
        console.log(i);
        numbers.push(i);
    }
    return numbers;  
}
asyncCounter()
    .then(result => {
    console.log("This is the final result:", result)
})