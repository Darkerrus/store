const  Router = require('express') //получаем роутер из express
const router = new Router() //создаём объект
const userController = require('../controllers/userController') //импорт контроллера
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router