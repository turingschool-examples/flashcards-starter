const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round')

describe('Round', function() {

    it('should be a function', function() {
        const round = new Round();
        expect(Round).to.be.a('function');
    })

    it('should make an instance of round', function() {
        const round = new Round();
        expect(round).to.be.an.instanceOf(Round);
    })
})