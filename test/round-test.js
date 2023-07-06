const chai = require('chai');
const expect = chai.expect;

const {takeTurn, endRound } = require('../src/round');

describe('turn', function(){
    it('should be a function', function() {
        expect(takeTurn).to.be.a('function');
    });
});

describe('round', function(){
    it('should be a function', function(){
        expect(endRound).to.be.a('function')
    });
})