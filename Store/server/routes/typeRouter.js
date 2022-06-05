const Router = require('express') //получаем роутер из express
const router = new Router() //создаём объект
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)


module.exports = router