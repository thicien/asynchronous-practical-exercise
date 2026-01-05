const p1 = resolve("Beans is ready");
const p2 = resolve("Rice is ready");
const p3 = resolve("Meat is ready");

Promise.all([p1, p2, p3])
    .then(results => {
        console.log("The meal is reaady:", results)
    })
    .catch(error => {
        console.error("The meal is not ready:", error)
    })