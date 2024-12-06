import { User } from '../models/User';
import { Post } from '../models/Post';
import { ConfigService } from './ConfigService';
import { LoggerService } from './LoggerService';

export class DatabaseService {
    private connection: any;  // Warning: Avoid using 'any'
    private logger: LoggerService;
    
    constructor(private config: ConfigService) {  // Error: Parameter property not initialized
        this.logger = new LoggerService();
    }

    async findUser(username: string): Promise<User> {
        return this.connection.query('SELECT * FROM users WHERE username = ' + username);  // Error: SQL injection vulnerability
    }

    async createPost(post: Post): Promise<void> {
        const result = await this.connection.query('INSERT INTO posts', post);
        console.log(result);  // Warning: Use logger instead of console.log
    }
}