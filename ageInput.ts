import { Worker } from 'worker_threads';
import * as readline from 'readline';
import { AgeTester } from "./ageTester"; 


class AgeInputManager {
    private isAgeValid : boolean;
    private rl : readline.Interface;
    private static workerPath : string = "./myWorker.ts";
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });
        this.isAgeValid = false;
    }
    public run() {
        this.askForAge();
    }
    private askForAge () {
        var worker = new Worker(AgeInputManager.workerPath);
        this.rl.question("Enter your age: ",  (answer) => {
            this.handleInput(answer, worker);
        });
    }
    private handleInput (answer: string, worker: Worker) {
        worker.postMessage(answer);
         worker.on("message", (message: string) => {
             console.log(message);
            this.isAgeValid = true;
            worker.terminate();
            this.rl.close(); // Close the readline interface if age is valid
        });
        worker.on("error", (error) => {
            console.error(error.message);
            worker.terminate();
            this.askForAge();
        });
    };
}

export {AgeInputManager};
