const jwt = require('jsonwebtoken')
module.exports = function (req, res, next) {
    if (req.method === "OPTION") {
        next()
    }
    try {
        // Сначала пишется тип токена, а потом сам токен. Нам надо его отлепить
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        //раскодируем токен
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        //добавим данные которые мы вытащили, будет доступен во всех функций
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
}