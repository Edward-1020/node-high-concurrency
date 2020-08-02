import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
    const config = {} as PowerPartial<EggAppConfig>;

    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'node-high-concurrency'
    }

    config.redis = {
        client: {
            port: 6379,
            host: '127.0.0.1',
            username: '',
            password: '',
            db: 0
        }
    }

    return {
        ...config
    };
};
