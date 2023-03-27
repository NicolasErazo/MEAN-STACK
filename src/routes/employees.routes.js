const { Router } = require('express')
const router = Router()

const employeesCtrl = require('../controllers/employeesCtrl')

router.get('/employees', employeesCtrl.getEmployees);
router.post('/employees', employeesCtrl.createEmployee);
router.get('/employees/:id', employeesCtrl.getEmployee);
router.put('/employees/:id', employeesCtrl.editEmployee);
router.delete('/employees/:id', employeesCtrl.deleteEmployee);

module.exports = router;