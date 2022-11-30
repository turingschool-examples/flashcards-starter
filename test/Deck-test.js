const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', function () {
    let testcounter = 0;
    beforeEach(function () {
        testcounter ++;
        console.log(`Test #${testcounter}`);
    });

    it('should be a function', function() {
        const deck = new Deck;
        expect(Deck).to.be.a('function');
    })

    it('should be a new instance of Deck', function() {
        const deck = new Deck;
        expect(deck).to.be.an.instanceOf(Deck); 
    })
})