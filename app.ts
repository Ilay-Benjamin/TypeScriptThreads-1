import { error } from 'console';
import { Worker } from 'worker_threads';



// Create a new worker
const w = new Worker('./myWorker.ts');

// Define a message to send to the worker
let message = "Hello, World! My First TS Threads Project.";

// Send the message to the worker
w.postMessage("My First TS Threads Project!");

// Listen for messages from the worker

w.on("message", (message) => {
    console.log(message);
});
w.on("error", (error) => {
    console.log(error);
});

console.log('fsaDGF');
