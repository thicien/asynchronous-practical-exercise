async function racePromises(promise) {
    try {
        const result = await Promise.race(promise)
        return result;
    } catch (error) {
    throw  error;
   }
}
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved")
    }, 1000)
})
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 resolved")
    }, 3000)
})
const p3 = new Promise((rejected) => {
    setTimeout(() => {
        rejected("Promise 3 rejected")
    }, 2000)
})
racePromises([p1, p2, p3])
    .then((result) => console.log("result:", result))
    .catch((error) => console.log("error:", error))