const express = require('express');

const path = require('path');

const app = express();

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index'); 
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros'); 
});

app.get('/servicios', (req, res) => {
  res.render('servicios'); 
});

app.get('/ubicacion', (req, res) => {
  res.render('ubicacion'); 
});


app.listen(3002, () => {
  console.log('servidor corriendo en el puerto, 3002');
});
