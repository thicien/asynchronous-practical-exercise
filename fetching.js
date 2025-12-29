function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const user = {
            name: "Thicien",
            age: 29
        };
    }, 4000);
    callback(data);
}
function displayData(user) {
    console.log("Name:", user.name);
    console.log("Age:", user.age);
}
fetchData(displayData);