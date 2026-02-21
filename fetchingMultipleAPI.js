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


async function fetchMultipleAPIs() {
try {
// API URLs
const api1 = "https://jsonplaceholder.typicode.com/users";
const api2 = "https://jsonplaceholder.typicode.com/posts";
const api3 = "https://jsonplaceholder.typicode.com/comments";
// Fetch all APIs concurrently
const responses = await Promise.all([
  fetch(api1),
  fetch(api2),
  fetch(api3)
]);

// Convert all responses to JSON
const data = await Promise.all(
  responses.map(response => response.json())
);

// Combine results into one object
const combinedResult = {
  users: data[0],
  posts: data[1],
  comments: data[2]
};

return combinedResult;

} catch (error) {
console.error("Error fetching APIs:", error);
throw error;
}
}