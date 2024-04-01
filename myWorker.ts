import { parentPort } from "worker_threads"; 
import { AgeTester, AgeError } from "./ageTester"; 

var currentParentPort = parentPort!;

currentParentPort.on('message', (message: string) => {
    var givenAge = Number.parseInt(message);
    AgeTester.test(givenAge);
    currentParentPort.postMessage('Success!');
});
currentParentPort.on('error', (error : Error) => {
    currentParentPort.postMessage(error);
});

export {};