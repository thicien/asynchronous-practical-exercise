function paymentProcess(amount, callback) {
    console.log("Processing of payment: $" + amount);
    setTimeout(() => {
        console.log("Payment is successful");
        callback("Payment completed successfully");
    }, 2000)
}
showPaymentConfirmation(message) {
    console.log("Payment Confirmation:" + message);
}
paymentProcess(1000, showPaymentConfirmation);
