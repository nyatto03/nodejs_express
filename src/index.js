const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Sử dụng destructuring để lấy 'engine'
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));

app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs' // Cấu hình mở rộng tập tin
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});