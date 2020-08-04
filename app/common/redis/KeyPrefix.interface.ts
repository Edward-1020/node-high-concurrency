export interface KeyPrefix {
    getExpireSeconds: () => number;
    getPrefix: () => string;
}