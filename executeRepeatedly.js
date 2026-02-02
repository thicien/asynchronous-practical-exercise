function executeRepeatedly(fn, interval) {
    return setTimeout(() => {
        fn();

    }, interval);
}
function sayHello() {
    console.log("Hello!, This function is going to execute every 2 seconds");
}
const intervalId = executeRepeatedly(sayHello, 2000);
setTimeout(() => {
    clearInterval(intervalId);
    console.log("This function execution has been stopped.");
}, 10000);