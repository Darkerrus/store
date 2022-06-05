const Router = require('express') //получаем роутер из express
const router = new Router() //создаём объект
const brandController = require('../controllers/brandController')//импорт контроллера
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)


module.exports = router