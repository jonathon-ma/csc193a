'use strict';

const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
  res.type('text');
  res.send('Hello World!');
});

app.get('/math/circle/:r', function (req, res) {
    if(req.params['r']){
        res.type('json');
        let value = req.params['r'];
        let jsonObject = {
            area: 12,
            circumference: null
        }
        jsonObject.area = Math.PI * value * value;
        jsonObject.circumference = 2 * Math.PI * value;
        res.send(JSON.stringify(jsonObject));
    }
})
app.get('/hello/name', function (req, res) {
    if(req.query['first'] && req.query['last']){
        res.type('text');
        res.send("Hello " + req.query['first'] + " " + req.query['last']);
    }
});
app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
