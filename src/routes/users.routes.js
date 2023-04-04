const { Router } = require('express')
const router = Router()

const usersCtrl = require('../controllers/usersCtrl')

router.post('/login', usersCtrl.login);
router.post('/register', usersCtrl.register);

module.exports = router;
