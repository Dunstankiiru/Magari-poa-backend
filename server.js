const jsonServer = require('json-server');
const path = require('path'); 
const express = require('express'); 

const server = jsonServer.create();

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use('/images', express.static(path.join(__dirname, 'images'))); 
server.use(middlewares);
server.use('/api', router);
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://Dunstankiiru.github.io'); // The URL you put here is for the web application that you have deployed using Github Pages
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
server.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running');
});
