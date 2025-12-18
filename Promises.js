const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("password is correct");
    } else {
        reject("Password is incorrect")
    }
    
});

