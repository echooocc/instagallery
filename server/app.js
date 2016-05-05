var express = require('express');
var request = require('request');
var debug = require('debug')('app');

var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static('.'));
app.use(express.static('./app'));
app.use(express.static('./node_modules/'));

app.get('/hashtag/:hashtag', function(req, res) {
  // Instagram api
  var token = '8619424.1fb234f.7269466246614d66b271705b4ec43707';
  var tagUrl = 'https://api.instagram.com/v1/tags/';
  var url = tagUrl + req.params.hashtag + '/media/recent?access_token=' + token + '&count=12';

  // Insert code here to call Instagram and return photos.
  debug('Requesting data with hashtag', req.params.hashtag);
  request({
    url: url,
    json: true
   }, function (error, response, body) {
    if (!error && res.statusCode === 200) {
      // debug(body);
      res.send(body);
    }
   });
});

var server = app.listen(app.get('port'), function () {
  console.log('Instagallery server listening on port '+ app.get('port'));
});
