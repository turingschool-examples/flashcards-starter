const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const prototypeData = require('../src/data.js');

describe('Round', function() {
    let testcounter = 0;
    beforeEach(function () {
        testcounter ++;
        console.log(`Test #${testcounter}`);
    })

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        expect(round).to.be.an.instanceOf(Round);
    });

});