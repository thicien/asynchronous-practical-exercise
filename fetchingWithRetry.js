async function fetchWithRetry(url, retries = 3, delay = 1000) {
  try {
    const response = await fetch('https://api.github.com/users/${username}')
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
      return await response.json();

  } catch (error) {
    if (retries === 0) {
      throw new Error("All retries failed")
    }
    console.log(`Retrying... (${retries} left)`)
    await new Promise(resolve => setTimeout(resolve, delay))
    return fetchWithRetry(url, retries - 1, delay)
  }
}
