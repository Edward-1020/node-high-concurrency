import { BasePrefix } from './BasePrefix';

export class OrderKey extends BasePrefix {
    constructor (expireSeconds: number, prefix: string) {
        super(expireSeconds, prefix);
    }
}
