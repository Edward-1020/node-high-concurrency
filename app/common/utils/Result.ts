import { StatusCode } from '../enums/statusCode';

type ResultData<T> = T | null;

export class Result<T> {
    code: number;
    message: string;
    data: ResultData<T>;

    constructor(code: number, message: string, data: ResultData<T>) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    static success<T>(message: string, data?: ResultData<T>): Result<T> {
        if (data) {
            return new Result<T>(StatusCode​​.Success, message, data);
        }
        return new Result<T>(StatusCode.Success, message, null);
    }

    static error<T>(message: string = ''): Result<T> {
        return new Result<T>(StatusCode.Error, message, null);
    }
}