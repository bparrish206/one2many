var chai = require('chai');
var expect = require('chai').expect;
var chaihttp = require('chai-http');
chai.use(chaihttp);
var app = require('./index');

describe("app should display players and team scores", function(){
  it('display teams average score', function(done){
    chai.request('http://localhost:3000')
    .get('/')
    .end(function(err, res){
    expect(res.status).to.eql(200);
    done();
  });
  });
});
