function paymentProcess(amount, callback) {
    console.log("Processing of payment: $" + amount);
    setTimeout(() => {
        console.log("Payment is successful");
    }, 2000)
}
showPaymentConfirmation(message) {
    console.log("Payment Confirmation:" + message);
}
paymentProcess(1000, showPaymentConfirmation);
