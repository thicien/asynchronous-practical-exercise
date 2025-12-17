function fetchToDo() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network are not responding");

            }
            return response.json();
        })
    .then((data) => {
        console.log("fetched To Do:", data);
    })
        
    .catch((error) => {
            console.log("There is an error:", error.message);
    })
    
}
fetchToDo();