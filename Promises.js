const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("password is correct");
    } else {
        reject("Password is incorrect")
    }
    
});

function countPairs(arr) {
    const frequency = {};
    let pairs = 0;
    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
    }
    for (let key in frequency) {
        pairs += Math.floor(frequency[key] / 2);
    }
    return pairs;
}

const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countPairs(items));