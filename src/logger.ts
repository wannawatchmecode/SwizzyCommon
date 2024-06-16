
export interface ILogger {
    log(val: string): void;
    info(val: string): void;
    error(val: string): void;
    warn(val: string): void;
    debug(val: string): void;
}

export class BrowserLogger implements ILogger {
    
    log(val: string): void {
        console.log(val);
    }
    info(val: string): void {
        console.info(val);
    }
    error(val: string): void {
        console.error(val);
    }
    warn(val: string): void {
        console.warn(val);
    }
    debug(val: string): void {
        console.debug(val);
    }
}