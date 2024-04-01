
import { parentPort } from "worker_threads";

var currentParentPort = parentPort!;

var onMessageFunction = (message: string) => {
    const result = `Worker Success! \n A Message Has Been Recived. \n The Message: "${message}". \n`;
    currentParentPort.postMessage(result);
}

var onErrorFunction = (error: string) => {
    const result = `Worker Error! \n No Message Has Been Recived. \n Error: ${error}. \n`;
    currentParentPort.postMessage(result);
}

currentParentPort.on('message', (message: string) => {
    try{
        if (message == null) {
            throw new Error("Illegal Message.")
        }
        onMessageFunction(message);
    } catch(error: any) {
        onErrorFunction(error.message);
    }
});

currentParentPort.on('error', (error: string) => {
    onErrorFunction(error);
});