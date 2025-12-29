function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const user = {
            name: "Thicien",
            age: 29
        };
        callback(user);
    }, 4000);
}
function displayData(user) {
    console.log("Name:", user.name);
    console.log("Age:", user.age);
}
fetchData(displayData);