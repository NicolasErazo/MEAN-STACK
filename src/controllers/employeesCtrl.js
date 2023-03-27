const employeeCtrl = {}
const employee = require('../models/employee')

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await employee.find()
    res.json(employees)
}

employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new employee(req.body)
    await newEmployee.save()

    res.send({ message: 'Employee Created' })
}

employeeCtrl.getEmployee = async (req, res) => {
    const oneEmployee = await employee.findById(req.params.id)
    res.send(oneEmployee)
}

employeeCtrl.editEmployee = async (req, res) => { 
    await employee.findByIdAndUpdate(req.params.id, req.body)
    res.send({ message: 'Employee Updated' })
}

employeeCtrl.deleteEmployee = async (req, res) => {
    await employee.findByIdAndDelete(req.params.id)
    res.send({ message: 'Employee Deleted' })
}

module.exports = employeeCtrl   