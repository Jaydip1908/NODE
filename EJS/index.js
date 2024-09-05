const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/service', (req, res) => {
    res.render('service');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
