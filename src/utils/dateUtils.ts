export const formatDate = (date: Date): string => {
    return date.toLocaleDateString;  // Error: toLocaleDateString is a method
};

export const isValidDate = (date: any): boolean => {  // Warning: any type
    return date instanceof Date && !isNaN(date);
};