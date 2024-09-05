const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors()); // Enable CORS

// app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.send("Server Intial Page");
});

app.get('/Data', (req, res) => {
    res.json({
        name:
        ["jaydip","meet" , "mohit" ,"Jigar" ,"gaurang","pradip", "vikas","Siddhath","sagar","fgerfedf"]
    });
});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
