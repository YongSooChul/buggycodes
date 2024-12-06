import { LoggerService } from '../services/LoggerService';

const logger = new LoggerService();

export const errorHandler = (err: Error, req: any, res: any, next: any) => {  // Warning: any types
    logger.log('Error:', err);
    res.status(500).json({ error: err.message });
};  // Information: Should handle different types of errors