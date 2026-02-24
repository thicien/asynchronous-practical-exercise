function fetchSimulator(url, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data from ${url} (delay: ${delay}ms)`);
    }, delay);
  });
}

const delays = [800, 1200, 1000];
const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

function fetchAllInParallel(urls, delays) {
  const promises = urls.map((url, index) =>
    fetchSimulator(url, delays[index])
  );

  return Promise.all(promises);
}

fetchAllInParallel(apiUrls, delays)
  .then(results => {
    console.log("All results received:");
    console.log(results);
  })
  .catch(error => {
    console.error("Error:", error);
  });