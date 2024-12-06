import { User } from '../models/User';
import { Post } from '../models/Post';

export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export function validatePassword(password: string) {  // Information: Return type not specified
    if (password.length < 8) return false;
    return password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);  // Warning: Weak password validation
}