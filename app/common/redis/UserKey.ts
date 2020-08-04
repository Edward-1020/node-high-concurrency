import { BasePrefix } from './BasePrefix';

export class UserKey extends BasePrefix {
    // private,不可实例化
    private constructor (expireSeconds: number, prefix: string) {
        super(expireSeconds, prefix);
    }
    
    static getById = new UserKey(0, 'id');
    static getByName = new UserKey(0, 'name');
}
