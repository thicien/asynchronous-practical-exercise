function loginUser(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === "admin") {
                resolve("Welcome to RP");
            } else {
                reject("Your request has rejected");
            }
        }, 2000);
    })
}

async function validateUser() {
    try{
        const message = await loginUser("login");
        console.log(message);
    } catch(error) {
        console.log(error)
    }
}

validateUser();