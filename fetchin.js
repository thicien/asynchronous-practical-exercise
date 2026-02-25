function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.timeout = 5000;

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error(`HTTP Error: ${xhr.status}`));
      }
    };

    xhr.onerror = () => reject(new Error('Network Error'));
    xhr.ontimeout = () => reject(new Error('Request Timed Out'));

    xhr.send();
  });
}