const {Sequelize} = require('sequelize')
// экспортируем объект который создаем из класса
module.exports = new Sequelize(
    process.env.DB_NAME, //название бд
    process.env.DB_USER, //Пользователь
    process.env.DB_PASSWORD, //Пароль
    {
        dialect: 'postgres', //наш диалект, какая бд используется
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

