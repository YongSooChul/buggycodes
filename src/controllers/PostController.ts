import { Post } from '../models/Post';
import { DatabaseService } from '../services/DatabaseService';
import { ValidationService } from '../services/ValidationService';
import { AuthService } from '../services/AuthService';

export class PostController {
    private db: DatabaseService;
    private validator: ValidationService;
    
    createPost(post: Post) {  // Information: Missing return type
        if (this.validator.validatePost) {  // Error: validatePost is a method, not a property
            this.db.createPost(post);
        }
    }
}