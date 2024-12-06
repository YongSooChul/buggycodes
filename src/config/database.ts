import { ConfigService } from '../services/ConfigService';

export const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,  // Warning: Should convert to number
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};
