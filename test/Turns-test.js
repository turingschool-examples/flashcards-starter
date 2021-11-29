const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Turns', function() {
   
    it('should be a function', function() {
        const card = new Card();
        expect(card).to.be.a('function');
    });

    it('should be an instance of a function', function() {
        const card = new Card();
        expect(card).to.be.an.instanceOf(Card);
    });
});