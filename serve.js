function prepareFood(callback) {
    console.log("preparing food...");
    setTimeout(callback, 1000);
}
function deliverFood(callback) {
    console.log("delivering food...");
    setTimeout(callback, 3000);
}
function notifyCustomer(callback) {
    console.log("The meal is ready. Enjoy your food!");
}
prepareFood(() => {
    deliverFood(notifyCustomer);
});