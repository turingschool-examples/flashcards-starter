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

    // Test #1

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    // Test #2

    it('should be an instance of Round', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);

        expect(round).to.be.an.instanceOf(Round);
    });

    // Test #3

    it('should hold a card deck', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);

        const deck = new Deck([card1, card2, card3]);

        const round = new Round(deck);
    
        expect(round.deck).to.deep.equal(deck)
    });

    // Test #4

    it('should return the first card in the deck', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        
        const deck = new Deck([card1, card2, card3]);
        
        const round = new Round(deck);
        
        const currentCard = round.returnCurrentCard();
        
        expect(currentCard).to.deep.equal(prototypeData[0]);
    });

    // Test #5

    it('should update the turn count', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        
        const deck = new Deck([card1, card2, card3]);
        
        const round = new Round(deck);

        round.takeTurn();

        expect(round.turns).to.equal(1);
    });

    // Test #6

    it('should update the turn count multiple times', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        
        const deck = new Deck([card1, card2, card3]);
        
        const round = new Round(deck);

        round.takeTurn();
        round.takeTurn();
        round.takeTurn();

        expect(round.turns).to.equal(3);
    });

    // Test #7

    it('should update the current card to the next card', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        
        const deck = new Deck([card1, card2, card3]);
        
        const round = new Round(deck);

        round.takeTurn();
        
        const currentCard = round.returnCurrentCard();

        expect(currentCard).to.deep.equal(prototypeData[1]);
    });

    // Test #8

    it('should update the current card multiple times', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        const card4 = new Card(prototypeData[3]);
        
        const deck = new Deck([card1, card2, card3, card4]);
        
        const round = new Round(deck);

        round.takeTurn();
        round.takeTurn();
        round.takeTurn();

        const currentCard = round.returnCurrentCard();

        expect(currentCard).to.deep.equal(prototypeData[3]);
    });
});