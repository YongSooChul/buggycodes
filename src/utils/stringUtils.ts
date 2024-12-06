export const capitalize = (str: string) => {  // Information: Return type not specified
    return str.charAt(0).toUpperCase + str.slice(1);  // Error: toUpperCase is a method
};

export const truncate = (str: string, length: number) => {
    return str.substring(0, length) + '...';
}  // Warning: No check for length > str.length