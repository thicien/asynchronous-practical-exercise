async function getFastPosts() {
    const endpoints = ['https://dummyjson.com/posts',
        'https://this-may-not-exist.com/posts',
        'https://jsonplaceholder.typicode.com/posts'];
    
    const fetchPromises = endpoints.map(url => {
        fetch(url).then(res => {
            if (!res.ok) throw new Error(`Failed to get post from ${url}`)
            return res.json();
        }).catch(error => {
            console.error(error.message);
            return null;
        })

    });
    const fastestResult = await Promise.race(fastestResult);
    if (!fastestResult) {
        throw new Error("All sources failed");
        }
    return fastestResult;

    
}
getFastPosts()
    .then(data => console.log(data))
    .catch(error => console.error(error));