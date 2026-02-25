//using async
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function asyncCounter() {
  const numbers = [];
  for (let i = 1; i <= 5; i++) {
    await delay(1000);
    console.log(i);
    numbers.push(i);
  }
  return numbers;
}
asyncCounter().then(result => {
  console.log("Final Result:", result);
});



// using promises
function asyncCounter() {
  const numbers = [];
  return new Promise((resolve) => {
    let count = 1;
    const interval = setInterval(() => {
      console.log(count);
      numbers.push(count);
      if (count === 5) {
        clearInterval(interval);
        resolve(numbers);
      }
      count++;
    }, 1000);
  });
}
asyncCounter().then(result => {
  console.log("Final Result:", result);
});