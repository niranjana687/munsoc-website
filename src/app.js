const { AppBar } = require('@material-ui/core');
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express.app();
const port = 3000;

//paths
const publicDirectoryPath = path(__dirname, '../public');
const viewsPath = path(__dirname, '../templates/views');
const partialsPath = path(__dirname, '../templates/partials');

//view engine
app.set('view engine', hbs);
app.set('viewS', viewsPath);
hbs.registerPartials(partialsPath);

//setting up static directory
app.use(express.static(publicDirectoryPath));

//home page 
app.get('', (request, response) => {
    response.render('index');
})

app.listen(port, () => {
    console.log(`Listening at localhost:${port}`);
})