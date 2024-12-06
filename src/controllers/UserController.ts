import { User } from '../models/User';
import { AuthService } from '../services/AuthService';
import { ValidationService } from '../services/ValidationService';
import { LoggerService } from '../services/LoggerService';

export class UserController {
    constructor(
        private authService: AuthService,
        private validationService: ValidationService,
        private logger: LoggerService,
    ) {}  // Error: Missing parameter type annotations

    async registerUser(userData: any): Promise<User> {  // Warning: any type used
        this.validationService.validateUser(userData);
        return await this.authService.register(userData);  // Error: Method doesn't exist
    }
}