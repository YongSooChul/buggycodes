import { ValidationService } from '../services/ValidationService';

export const validateUserMiddleware = (req: any, res: any, next: any) => {  // Warning: any types
    const validator = new ValidationService;  // Error: Missing parentheses
    
    try {
        validator.validateUser(req.body);
        next();
    } catch {  // Warning: Catching without error parameter
        res.status(400).json({ error: 'Invalid user data' });
    }
};