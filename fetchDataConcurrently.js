async function getFastPosts() {
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/users/1",
        "https://jsonplaceholder.typicode.com/comments/1"
    ];
        const requests = urls.map(url => 
            fetch(url).then(response => {
                if(!response.ok) {
                    throw new Error(`Failed to fetch data from ${url}`);
                }
                return response.json();
            })
        )
        try{
            const fastestResponse = await Promise.race(requests);
            return fastestResponse;
        } catch(error) {
            console.log("Failed to get data from urls and the fastest one errored:", error);
        }
        throw error;
    }
    getFastPosts()
     .then(posts => {
         console.log("Fastest posts received:", posts);
     })
     .catch(error => {
         console.log("Could not load the url:", error.message);
     });