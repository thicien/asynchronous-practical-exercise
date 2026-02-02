function fetchWithTimeout(URL, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;
    const timer = setTimeout(() => {
        controller.abort();
    }, timeout);

    return fetchPromise = fetch(URL, { signal }).then(response => {
        clearTimeout(timer);
        if (!response.ok) {
            throw new Error("Fetch failed");
        } else {
            return response.json();
        }
    }).catch(error => {
        if (error.name === "AbortError") {
            throw new Error("Fetch request has timed out");
        }
        throw error;
    })
}
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 3000)
    .then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    });