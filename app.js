require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const methodOverride = require('method-override');

const session = require('express-session');
const flash = require('connect-flash');

const connectDB = require('./server/config/db');

const app = express();
const port = 5000 || process.env.PORT;
// connect to database
connectDB();


// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(express.static('public')); 

//Express Session
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        }
    })
);

app.use(flash({ sessionKeyName: 'flashMessage' }));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine','ejs');

app.use('/',require('./server/routes/customer'))
// app.get('*',(req,res)=>{
//     res.status(404).render('404');
// });
app.listen(port,()=>{
    console.log(`app listening ${port}`);
})