//связующее звено, объеденяет все роуты
const  Router = require('express') //получаем роутер из express
const router = new Router() //создаём объект
const brandRouter = require('./brandRouter')
const deviceRouter = require('./deviceRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)


module.exports = router