import { Service } from 'egg';
import { KeyPrefix } from './KeyPrefix.interface';

export default class Test extends Service {
    public async get<T> (prefix: KeyPrefix, key: String): Promise<T | null>{
        const realKey = prefix.getPrefix() + key;
        const str = await this.app.redis.get(realKey);
        if (str) {
            return this.stringToObj<T>(str);
        } else {
            return null;
        }
    }

    public set<T>(prefix: KeyPrefix, key: String, value: T): boolean {
        const str = this.objToString(value);
        if (!str) {
            return false;
        }
        //className:prefixkey
        const realKey = prefix.getPrefix() + key;
        const seconds = prefix.getExpireSeconds();
        if (seconds <= 0 ) {
            this.app.redis.set(realKey, str);
        } else {
            this.app.redis.set(realKey, str, 'EX', seconds);
        }
        return true;
    }

    stringToObj<T>(str: string | null): T | null{
        if (str) {
            return JSON.parse(str);
        } else {
            return null;
        }
    }

    objToString<T> (value: T): string{
        if (
            Object.prototype.toString.call(value) === '[object Object]'
        || Object.prototype.toString.call(value) === '[object Array]') {
            return JSON.stringify(value);
        } else {
            return value + '';
        }
    }
}
