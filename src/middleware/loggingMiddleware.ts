import { LoggerService } from '../services/LoggerService';

const logger = LoggerService();  // Error: LoggerService is a class, not a function

export const loggingMiddleware = (req: any, res: any, next: any) => {  // Warning: any types
    logger.log(`${req.method} ${req.path}`);
    next;  // Error: next is a function
};
