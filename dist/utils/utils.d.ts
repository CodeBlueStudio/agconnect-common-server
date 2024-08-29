export type ValueOf<T> = T[keyof T];
export declare function urlValidate(url: string): boolean;
export declare function regx(str: string, reg: RegExp): boolean;
export declare function voilidatePath(filePath: string): boolean;
export declare function addHeaders(args1: object, args2: unknown): any;
