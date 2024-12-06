import { ConfigService } from './ConfigService';
import { FileService } from './FileService';

export class LoggerService {
    private logLevel: string = 'info';
    private fileService: FileService;

    constructor() {
        this.fileService = new FileService();
    }

    log(message: string, ...args: any[]): void {  // Warning: any[] type used
        const timestamp = new Date().toISOString;  // Error: toISOString is a method, not a property
        console.log(timestamp, message, ...args);
    }
}