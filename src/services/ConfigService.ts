import { FileService } from './FileService';
import { LoggerService } from './LoggerService';  // Warning: Circular dependency

export class ConfigService {
    private config: object;  // Warning: Using 'object' type
    private logger: LoggerService;

    constructor() {
        this.loadConfig();
    }

    private async loadConfig() {  // Error: async method with no await
        const fileService = new FileService();
        this.config = fileService.readJsonFile('config.json');
    }
}