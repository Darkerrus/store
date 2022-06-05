//npm run dev старт приложения

require('dotenv').config() //чтоб пронимал что такое env
const express = require('express') //импорт модуля
const sequelize = require('./db') //подключение к бд
const  PORT = process.env.PORT || 5000 //наш порт
const models = require('./models/models') //импортируем модели
const cors = require('cors') //импорт модуля
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')//импортируем регистрацию ошибок
const path = require('path')

const  app = express() //создадим объект вызвав функцию
app.use(cors()) //настроим, чтобы погли отправлять запросы get, post
app.use(express.json()) //чтоб мог парсить json формат
app.use(express.static(path.resolve(__dirname, 'static')))//чтобы смотрет статичные картинки
app.use(fileUpload({}))//чтобы работать с изображениями
app.use('/api', router) //url для которого роутер должен обрабатываться и сам роутер




//последний тк является замыкающим и не вызываем next, тк работа на нем прекращается
app.use(errorHandler)

//функция старт асинх, потому что все все операции с бд асинх
const start = async () => {
    try {
        //await по сути нужен в асинх запросах, тк позволяет функции выполнится и ждать выполнения следущей
        await sequelize.authenticate() //функция для подключения к бд
        await sequelize.sync()
        //прослушивание порта и колбек, который отработает при успешном запуске сервера
        app.listen(PORT,() => console.log(`Server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()



