function fetchWithTimeout(URL, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPromise = fetch(URL, { signal }).then(response => {
        if (!response.ok) {
            throw new Error("Fetch failed");
        }
    })
 }