function fetchMultipleAPIs() {
    const api1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(response => response.json());
    const api2 = fetch("https://jsonplaceholder.typicode.com/users/1").then(response => response.json());
    const api3 = fetch("https://jsonplaceholder.typicode.com/comments/1").then(response => response.json());
    return Promise.all([api1, api2, api3]).then(results => {
        return {
            user: results[0],
            posts: results[1],
            comments: results[2]
        }
    }).catch(error => {
        console.error("Error in fetching data from APIs:", error);
    })
}
fetchMultipleAPIs().then(data => {
    console.log(data)
});