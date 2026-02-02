function createAlarm(name, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            reject("The delay is insufficient");
        } else {
            setTimeout(() => {
                resolve(`wake up ${name} Its a time `)
            }, delay * 1000);
        }
    })
}
createAlarm("Thicien", 5).then(message => {
    console.log(message);
}).catch(error => {
    console.error(error);
})