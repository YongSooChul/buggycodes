import { User } from '../models/User';
import { DatabaseService } from './DatabaseService';
import { ValidationService } from './ValidationService';
import { LoggerService } from './LoggerService';

export class AuthService {
    private db: DatabaseService;
    private validator: ValidationService;
    private logger: LoggerService;

    constructor() {
        this.db = new DatabaseService;  // Error: Missing parentheses
        this.validator = new ValidationService();
        this.logger = new LoggerService();
    }

    async login(username: string, password: string): Promise<User> {
        this.logger.log('Login attempt:', username);
        
        if (password.length <= 0) {  // Warning: Should check if undefined first
            throw new Error('Invalid password');
        }

        const user = await this.db.findUser(username);
        return user;  // Warning: No null check before return
    }
}