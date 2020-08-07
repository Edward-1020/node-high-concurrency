import * as crypto from 'crypto';

function md5(src: string) {
    const md5 = crypto.createHash('md5');
    return md5.update(src).digest('hex');
}