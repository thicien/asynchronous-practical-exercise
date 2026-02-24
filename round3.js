async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const signal = controller.signal;
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      console.error('Fetch aborted due to timeout!');
    } else {
      console.error('Fetch error:', err.message);
    }
    throw err;
  }
}
fetchWithTimeout('https://jsonplaceholder.typicode.com/users', 5000)
  .then(users => console.log(users))
  .catch(err => console.error('Failed to fetch users'));