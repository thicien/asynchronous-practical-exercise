function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); 

    xhr.open('GET', url); 
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText); 
          resolve(data); 
        } catch (err) {
          reject(err);
        }
      } else {
        reject(new Error(`HTTP Error: ${xhr.status}`));
      }
    };
    xhr.onerror = () => reject(new Error('Network Error'));
    xhr.send();
  });
}
myFetch('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));