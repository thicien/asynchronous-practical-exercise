const queue = [];

function addTask(task) {
    queue.push(task);
}

function fakeDelay(task, delay) {
    setTimeout(() => {
        addTask(task); 
    }, delay);
}

console.log("Start");

addTask(() => console.log("Task 1"));
addTask(() => console.log("Task 2"));

fakeDelay(() => console.log("Delayed Task (1000ms)"), 1000);
fakeDelay(() => {
    console.log("Delayed Task (500ms)");

    fakeDelay(() => console.log("Nested Delayed Task (200ms)"), 200);
}, 500);

addTask(() => {
    console.log("User clicked button event");
});

console.log("Processing tasks...");

function runEventLoop() {
    if (queue.length > 0) {
        const task = queue.shift();
        task();
    }

    setTimeout(runEventLoop, 0);
}

runEventLoop();

console.log("End");

async function fetchData() {
    try {
        const response = await fetch(url);
        console.log('The email is successfully validated');
    } catch (error) {
        console.log("This is not a valid email address");
    }
    
 }


