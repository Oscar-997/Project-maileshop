const path = require('path'); 
const express = require('express');
const { engine } = require('express-handlebars')
const app = express();
const methodOverride = require('method-override')
const morgan = require('morgan')
const port = 3000;


const route = require('./routes/index.js');
const db = require('./config/db/index')

db.connect()

// app.use(morgan('combined'))

app.use(methodOverride('_method'))

app.engine('hbs', engine({
  defaultLayout:'main',
  extname: '.hbs',
  helpers: {
    sum: (a , b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(__dirname + '/public'));
//Body Parser MiddleWars;

app.use(express.urlencoded({extended: true}));
app.use(express.json())

route(app);

app.listen(port, () => { 
    console.log(`Server is running on port: ${port}`); 
}); 
