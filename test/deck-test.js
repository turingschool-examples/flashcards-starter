const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;

describe('Deck', function() {

    it.skip('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it.skip('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
    })

})