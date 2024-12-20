const config = {
    development: {
        host: 'localhost',
        port: 5432,
        username: 'your_username',
        password: 'your_password',
        database: 'your_database',
        dialect: 'postgres',
    },
    production: {
        host: 'your_production_host',
        port: 5432,
        username: 'your_production_username',
        password: 'your_production_password',
        database: 'your_production_database',
        dialect: 'postgres',
    },
};

module.exports = config;