export type RequestHandler = (req: any, res: any, next: any) => void;  // Warning: any types
export type ErrorHandler = (err: Error, req: any, res: any, next: any) => void;  // Warning: any types

export interface Config {
    env: string;
    port: number;
    logLevel: string;
    // Error: Missing semicolon
}