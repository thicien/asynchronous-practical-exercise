function checkBalance(balance, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            balance >= amount ? resolve("Transaction Approved") : reject("Insufficient balance");
        }, 2000);
    });
}

function deductMoney() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Money deducted from your account"), 1000));
}
function sendSMS() {
    return new Promise((resolve) =>
            setTimeout(() => resolve("SMS sent to your registered mobile number"), 1000));
}

async function TransferFunds(balance, amount) {
    try {
        await checkBalance(balance, amount);
        await deductMoney();
        const sms = await sendSMS();
        console.log(;
    }
}