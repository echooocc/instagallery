var request = require('request');
var expect = require('chai').expect;
var debug = require('debug')('mocha');

describe('Implement Instagallery Server',function() {

  describe('defining the app.get method',function() {

    var server = 'http://localhost:3000';
    debug('test server @ '+server);

    it('should responds to empty hashtag with 404',function(done) {
      var api = server + '/hashtag/';
      request(api, function(err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });

    it('should responds to exiting hashtag with 200',function(done) {
      var api = server + '/hashtag/snow';
      request(api, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

  });

});
