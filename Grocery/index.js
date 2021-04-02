const express = require('express');
require('./utils/db.config');
const bodyparser = require('body-parser'); 
const User = require('./models/user')
const app = express();

app.use(bodyparser.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.get('/', function(req, res){
    res.render('index');
})

app.get('/register', function(req, res){
    res.render('register');
})

app.post('/register', async (req, res)=>{
    const user = new User (req.body)
    await user.save()
    return res.render('register', {message: 'Registration successful!!'});
})
app.listen(3000, function(){
    console.log('Server runnig at port 3000');
})

module.exports = app