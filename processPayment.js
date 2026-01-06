function processPayment() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Payment processed successfully"), 2000));
}
function verifyAddress() { 
    return new Promise((resolve) =>
        setTimeout(() => resolve("Address verified succcessfully"), 1000));
}
function