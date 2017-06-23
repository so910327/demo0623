var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('addone', function() {

    describe('GET /addone', function() {

      it('should return a default number', function(done) {

        request(server)
          .get('/addone')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            //console.log("excuting");
            res.body.should.eql('0 after addone, now total: 1');

            done();
          });
      });

      it('should input number', function(done) {

        request(server)
          .get('/addone')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res, req) {
            should.not.exist(err);
            res.body.should.eql('0 after addone, now total: 1');

            done();
          });
      });


    });

  });

});
