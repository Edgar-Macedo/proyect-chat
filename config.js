
const configs = {
    api: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost:3000',
        nodeEnv: process.env.NODE_ENV || 'Dev',
    },
    db: {
        Dev: {
            dialect: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: 'asd',
            database: 'chat-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true,
            }
        },
        QA: {
            dialect: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: 'asd',
            database: 'chat-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true,
            }
        },
        prod: {
            dialect: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: 'asd',
            database: 'chat-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true,
            },
            dialectOptions: { 
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        }
    }
}

module.exports = configs