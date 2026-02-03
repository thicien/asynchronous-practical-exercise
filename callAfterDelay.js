function callAfterDelay(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}
function mycallback() {
    console.log("This meassage is desplayed after 2 seconds delay");
}
callAfterDelay(mycallback);
