// const http = require('http');
// const data = require('./data')
// http.createServer((req, resp) => {
//     resp.writeHead(200, {'Content-Type': 'application/json'}); // Corrected Content-Type
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(3001, () => {
//     console.log('Server is listening on http://localhost:3001/'); // Updated to 3001
// });

const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('hello staring page');
});

app.get('/about',(req,res)=>{
    res.send('hello about page');
});

app.get('/contact',(req,res)=>{
    res.send('hello contact page');
});

app.listen(5000);