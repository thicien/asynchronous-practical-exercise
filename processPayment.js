function processPayment() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Payment processed successfully"), 2000));
}
function verifyAddress() { 
    return new Promise((resolve) =>
        setTimeout(() => resolve("Address verified succcessfully!"), 1000));
}
function checkStock() {
    return new Promise((resolve) => 
        setTimeout(() => resolve("Items are in the stock"), 1000));
}
async function checkOut() {
    try {
        const results = await Promise.all([processPayment(), verifyAddress(), checkStock()]);
        console.log("checkout completed:", results);
    } catch (error) {
        console.error("checkout failed:", error);

    }
}
checkOut();