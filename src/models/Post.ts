import { User } from './User';

export interface Post {
    id: number
    title: string;  // Error: Missing semicolon
    content: string;
    author: User;
    tags: string[];
    published: boolean;
    createddate: Date;  // Hint: Inconsistent naming (should be createdDate)
}