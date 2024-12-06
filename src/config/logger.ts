export const loggerConfig = {
    level: process.env.LOG_LEVEL || 'info',
    file: process.env.LOG_FILE || 'app.log',
    maxSize: '10m',  // Warning: Should be number
    maxFiles: '7d',  // Warning: Should be number
};
