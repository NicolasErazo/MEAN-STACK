const userCtrl = {}
const user = require('../models/user');
const jwt = require('jsonwebtoken');

userCtrl.login = async (req, res) => {
    const { email, password } = req.body;
    const userDates = await user.findOne({email})

    if(!userDates) return res.status(401).send("Email doesn't exists");
    if(userDates.password !== password) return res.status(401).send("Wrong password");

    const token = jwt.sign({_id: userDates._id}, 'SeCrEtKeY');
    res.status(200).json({token});
}

userCtrl.register = async (req, res) => {
    const { name, username, email, password } = req.body;
    const newUser = new user({ name, username, email, password });
    await newUser.save();
    
    const token = jwt.sign({_id: newUser._id}, 'SeCrEtKeY');
    res.status(200).json({token});
}   

module.exports = userCtrl   