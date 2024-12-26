import { LoggerService } from '../services/LoggerService';

const logger = new LoggerService();

export const errorHandler = (err: Error, req: any, res: any, next: any) => {  // Warning: any types
    logger.log('Error:', err);
    res.status(500).json({ error: err.message });
};  // Information: Should handle different types of errors

// Example with potential info diagnostic
function unusedParam(param: string) {
    // Parameter is never used
    return "something";
}

// Or using TSLint (if configured)
/*
 * @ts-info Parameter is unused
 */
function anotherExample(unusedParam: string) {
    console.log("Hello");
}