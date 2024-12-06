import { User } from '../models/User';
import { Post } from '../models/Post';
import { LoggerService } from './LoggerService';

export class ValidationService {
    private logger: LoggerService;

    validateUser(user: User) {  // Information: Return type not specified
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!user.email.match(emailRegex)) {
            throw 'Invalid email';  // Error: Throwing string instead of Error object
        }
    }

    validatePost(post: Post): boolean {
        return post.title.length > 0 && post.content.length > 0;  // Warning: No null checks
    }
}