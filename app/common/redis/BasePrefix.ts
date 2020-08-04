import { KeyPrefix } from "./KeyPrefix.interface";

export abstract class BasePrefix​​ implements KeyPrefix {
    expireSeconds: number;
    prefix: string;

    constructor (expireSeconds: number, prefix: string) {
        this.expireSeconds = expireSeconds;
        this.prefix = prefix;
    }


    // 0代表永不过期
    getExpireSeconds (): number {
        return this.expireSeconds;
    }
    getPrefix (): string {
        const className = this.constructor.name;
        return `${className}:${this.prefix}`;
    }

}