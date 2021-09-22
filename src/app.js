const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = 3000;

//paths
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//view engine
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

//setting up static directory
app.use(express.static(publicDirectoryPath));

//home page 
app.get('', (request, response) => {
    response.render('index');
});

//team
app.get('/team', (request, response) => {
    response.render('team');
});

//impact
app.get('/impact', (requesr, response) => {
    response.render('impact');
});

//contact 
app.get('/contact', (request, response) => {
    response.render('contact');
});

app.listen(port, () => {
    console.log(`Listening at localhost:${port}`);
});