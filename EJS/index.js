const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname,'public')));
const cors = require('cors');

const port = 8000;

app.set('view engine', 'ejs');
app.use(cors()); // Enable CORS




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
app.get('/Data', (req, res) => {
    res.json({
        name:
        ["jaydip","meet" , "mohit" ,"Jigar" ,"gaurang","pradip", "vikas","Siddhath","sagar","fgerfedf","2452"]
    });
});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
