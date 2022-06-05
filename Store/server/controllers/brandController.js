const {Brand, Type} = require('../models/models') //модель типа которая находится у нас в models
const ApiError = require('../error/ApiError');



class BrandController {
    async create(req, res) {
        //извлекаем название типа
        const {name} = req.body
        //с помощью create создаём этот тип, передаём только название и id присваевается автоматически
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

}

module.exports = new BrandController()