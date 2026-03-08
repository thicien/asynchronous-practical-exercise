async function fetchWithTimeout(url, timeoout = 5000) {
    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId);
    
        if (!response.ok) {
            throw new Error(`Error existed: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === "AbortError") {
            console.error("Error due to the timeout");
        } else {
            console.error("error occured");
        }
        throw error;
    }
}
fetchWithTimeout('https://jsonplaceholder.typicode.com/users', 5000)
    .then(users => console.log(users))
    .catch(error => console.error("c'est la faulte"))
