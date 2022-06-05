const {Type} = require('../models/models') //модель типа которая находится у нас в models
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        //извлекаем название типа
        const {name} = req.body
        //с помощью create создаём этот тип, передаём только название и id присваевается автоматически
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()