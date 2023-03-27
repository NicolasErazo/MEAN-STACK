const mongoose = require('mongoose');

const user = 'nicolacho';
const password = 'NOveyrcdNdOEj9vN';
const db = 'mydb'
const uri = `mongodb+srv://${user}:${password}@cluster0.y73uuxt.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose
    .connect(uri,
        {useUnifiedTopology: true, useNewUrlParser: true})
    .then((db) => console.log('DB is connected'))
    .catch((err) => console.error(err));
