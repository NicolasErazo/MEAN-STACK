const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken');

const employeesCtrl = require('../controllers/employeesCtrl')

router.get('/employees', verifyToken, employeesCtrl.getEmployees);
router.post('/employees', verifyToken, employeesCtrl.createEmployee);
router.get('/employees/:id', verifyToken, employeesCtrl.getEmployee);
router.put('/employees/:id', verifyToken, employeesCtrl.editEmployee);
router.delete('/employees/:id', verifyToken, employeesCtrl.deleteEmployee);

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