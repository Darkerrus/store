const bcrypt = require('bcrypt')//для того чтоб хэшеровать пароли
const jwt = require('jsonwebtoken')//для хранения инфы о пользователе
const {User, Basket} = require('../models/models')
const ApiError = require('../error/ApiError')


const generateJwt = (id , email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,//секретный ключ в файле с переменными окружения
        {expiresIn: '24h'}//живет 24 часа
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Некорректный логин или пароль!"))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email же существует!!'))
        }
        const hashPassword = await bcrypt.hash(password, 5)//хэшируем пароль несколько раз
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)//вызываем функцию jwt
        return res.json({token})
    }


    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {//проверяем есть ли пользователь
            return next(ApiError.internal('Пользователь не найден!'))
        }
        //сравниваем пароли
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль!!'))
        }
        //генерируем токен и передаем все параметры чтоб вернуть клиенту
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const  token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()