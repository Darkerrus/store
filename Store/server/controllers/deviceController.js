const {Device, DeviceInfo } = require('../models/models') //модель типа которая находится у нас в models
const ApiError = require('../error/ApiError')
const uuid = require('uuid')//чтобы id картинок не повторялись
const path = require('path')//модуль чтоб не писать полный путь к папке


class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} =  req.files
            let fileName = uuid.v4() + ".jpg"//сгенерирует имя картинки +jpg
            //перемещает все файлы в папку static которые будут отправлять с клиента
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName})

            //если передали в теле запроса info
            if (info) {
                //парсим тк на фронте приходит в  форме строки. на бэке обратно перегонять в js
                info = JSON.parse(info)
                //пробегаемся по массиву и вызываем на каждую итерацию функцию create
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }



            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        //limit - кол-во девайстов которые отображаются на стр
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})

        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})

        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {//условие по каким параметрам искать
                where: {id},
                //так же получаем массив характеристик определенного девайса
                include: [{model: DeviceInfo, as: 'info'}] //модель которую подгружаем и info
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()