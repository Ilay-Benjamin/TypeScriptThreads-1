
import { Worker } from "worker_threads"; 
import { AgeInputManager } from './ageInput';

const ageInputManager = new AgeInputManager();

ageInputManager.run();

export {};