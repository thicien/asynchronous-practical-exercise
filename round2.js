async function getFastPosts() {
  const endpoints = [
    'https://dummyjson.com/posts',
    'https://this-may-not-exist.com/posts',
    'https://jsonplaceholder.typicode.com/posts'
  ];

  const fetchPromises = endpoints.map(url =>
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch from ${url}`);
        return res.json();
      })
      .catch(err => {
        console.warn(err.message);
        return null;
      })
    );
  const fastestResult = await Promise.race(fetchPromises);
  if (!fastestResult) {
    throw new Error("All sources failed");
  }
  return fastestResult;
}

getFastPosts()
  .then(posts => console.log(posts))
  .catch(err => console.error("Error fetching posts:", err.message));