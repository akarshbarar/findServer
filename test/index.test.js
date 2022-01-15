const supertest = require('supertest');
const should = require('should');
const findServer = require('../src/Controller');
const server = supertest.agent('http://localhost:3000');

describe('Router', () => {
    //Calling API
    it('API Calling', (done) => {
        server.get('/getServer').expect('Content-type',/json/).expect(200).end( (err,res) => {
            res.status.should.equal(200);
            done();
        });
    });
});