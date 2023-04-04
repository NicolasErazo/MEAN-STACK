const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken');

const employeesCtrl = require('../controllers/employeesCtrl')

router.get('/employees', employeesCtrl.getEmployees);
router.post('/employees', employeesCtrl.createEmployee);
router.get('/employees/:id', employeesCtrl.getEmployee);
router.put('/employees/:id', employeesCtrl.editEmployee);
router.delete('/employees/:id', employeesCtrl.deleteEmployee);

module.exports = router;

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Not authorized');
    }

    const token = req.headers.authorization.split(" ")[1]
    if(token == 'null'){
        return res.status(401).send('Not authorized');
    }

    const data = jwt.verify(token, 'SeCrEtKeY')
    req.userId = data._id
    next();
}