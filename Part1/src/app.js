const express = require('express');
const path = require('path');


const app = express();

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// middleware
app.use(express.json());

//routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})