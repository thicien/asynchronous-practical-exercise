function delayedFetch(url, delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
        .then(() => fetch(url))
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => {
            console.error(`error fetching ${url} after delay:`, error);
            throw error;
        });
}
    const urls = ['jsonplaceholder.typicode.com',
        'jsonplaceholder.typicode.com',
        'jsonplaceholder.typicode.com'
   ];
    
    const delays = [1000, 2000, 5000];
    
    const promises = [delayedFetch(urls[0], delays[0]),
                     delayedFetch(urls[1], delays[1]),
                     delayedFetch(urls[2], delays[2])
];
Promise.all(promises)
    .then(data => {
        console.log('All data fetched:', data);
    })
    .catch(error => {
        console.error('One of the promises failed:', error);
    });


