import { LoggerService } from './LoggerService';
import * as fs from 'fs';

export class FileService {
    private logger: LoggerService;

    constructor() {
        this.logger = new LoggerService;  // Error: Missing parentheses
    }

    readJsonFile(path: string): string {  // Warning: Returns any
        return JSON.parse(fs.readFileSync(path));  // Error: No error handling
    }
}