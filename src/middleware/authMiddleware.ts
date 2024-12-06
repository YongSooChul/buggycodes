import { AuthService } from '../services/AuthService';
import { LoggerService } from '../services/LoggerService';

export const authMiddleware = async (req: any, res: any, next: any) => {  // Warning: any types
    const authService = new AuthService();
    const logger = new LoggerService();

    const token = req.headers.authorization;
    
    if (!token) {
        res.status(401).json({ error: 'No token provided' });
    }  // Error: Missing return after response

    next();
};