
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// TODO: Add wannabe
var plans = [
  {
    id: 'droid',
    title: 'Pacote Droid',
    desc: 'Estamos Perdidos! beep? beep beep?! Bleep Blop Blep! Zeep zip smap Smap smeep!'
  },
  {
    id: 'jedi',
    title: 'Pacote Jedi',
    desc: 'Droid, por favor! Um-quarto de porção... O lixo vai servir! Fffkrrshhzz.. Woom..woooom..'
  }
];

app.get('/', function(req, res) {
  res.render('index', { plans: plans });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
