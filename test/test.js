var assert = require('assert');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('loading express', function() {
  it('responds to /', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });

  it('404 everything else', function(done) {
    chai.request(server)
      .get('/foo/bar')
      .end(function(err, res){
        res.should.have.status(404);
        done();
      });
  });
});
