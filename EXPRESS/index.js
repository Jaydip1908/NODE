const express=require('express')

const app=express()

const port=8000;

app.get('/',(req,res)=>{
    res.send('<h1>Welcom Express JS</h1>');
})

app.get('/route',(req,res)=>{
    res.send('<h1>Wwlcom Express JS route</h1>');
})

app.listen(port , ()=>{
    console.log(`server started on http://localhost:${port}`)
});
