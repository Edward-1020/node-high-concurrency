import * as crypto from 'crypto';

function md5(src: string): string {
    const md5 = crypto.createHash('md5');
    return md5.update(src).digest('hex');
}

const salt = '1a2b3c4d';

// 表单提交的明文pass md5,这里的salt写死是因为服务端不知道串是啥
function inputPassToFormPass(inputPass: string): string {
    const str = salt.charAt(0) + salt.charAt(2) + inputPass + salt.charAt(5) + salt.charAt(4);
    return md5(str);
}

// db存的pass md5，salt需要随机

// 表单提交的pass md5,这里的salt写死是因为服务端不知道串是啥
function formPassToDBPass(formPass: string, salt: string): string {
    const str = salt.charAt(0) + salt.charAt(2) + formPass + salt.charAt(5) + salt.charAt(4);
    return md5(str);
}

function inputPassToDBPass(inputPass: string, saltDB: string): string {
    const formPass = inputPassToFormPass(inputPass);
    return formPassToDBPass(formPass, saltDB);
}

export {
    md5,
    inputPassToDBPass
}