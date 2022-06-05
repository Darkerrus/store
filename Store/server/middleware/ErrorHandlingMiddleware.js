const ApiError = require('../error/ApiError');//импортируем класс ApeError



//ошибка, запрос, ответ и функция next, вызвав которую мы передадим в управление следующему в цепочке middleware
module.exports = function (err, req, res, next) {
    //если класс ошибки ApiError
    if(err instanceof ApiError) {
        //получаем ответ со статус кодом который будем получать из ошибки и с сообщением которое мы в эту ошибку поместили
        return  res.status(err.status).json({message: err.message})
    }
    //чтобы завершилась и если другая ошибка выведем 500
    return res.status(500).json({message: "Непредвиденая ошибка!"})
}