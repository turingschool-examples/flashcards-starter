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

        let currentCard = round.returnCurrentCard();
        expect(currentCard).to.deep.equal(prototypeData[0])
        expect(currentCard).to.equal(round.currentCard);

        round.takeTurn();
        currentCard = round.returnCurrentCard();
        expect(currentCard).to.deep.equal(prototypeData[1]);
        expect(currentCard).to.equal(round.currentCard);

        round.takeTurn();
        currentCard = round.returnCurrentCard();
        expect(currentCard).to.deep.equal(prototypeData[2])
        expect(currentCard).to.equal(round.currentCard);

        round.takeTurn();
        currentCard = round.returnCurrentCard();
        expect(currentCard).to.deep.equal(prototypeData[3]);
        expect(currentCard).to.equal(round.currentCard);
    });

    // Test #9

    it('should store incorrect guesses', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        const card4 = new Card(prototypeData[3]);
        
        const deck = new Deck([card1, card2, card3, card4]);
        
        const round = new Round(deck);

        const newTurn = round.takeTurn('guess');

        expect(round.incorrectGuesses).to.deep.equal([prototypeData[0]]);
    });

    // Test #10

    it('should store multiple incorrect guesses', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        const card4 = new Card(prototypeData[3]);
        
        const deck = new Deck([card1, card2, card3, card4]);
        
        const round = new Round(deck);

        round.takeTurn('guess');
      
        round.takeTurn('second guess');

        round.takeTurn('third guess');

        expect(round.incorrectGuesses).to.deep.equal([prototypeData[0], prototypeData[1], prototypeData[2]]);
    });

    // Test #11

    it('should return correct if guess is correct', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        const card4 = new Card(prototypeData[3]);
        
        const deck = new Deck([card1, card2, card3, card4]);
        
        const round = new Round(deck);

        const feedback = round.takeTurn('object');

        expect(feedback).to.equal('correct');
    });

    // Test #12

    it('should return incorrect if guess is incorrect', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        const card4 = new Card(prototypeData[3]);
        
        const deck = new Deck([card1, card2, card3, card4]);
        
        const round = new Round(deck);

        const feedback = round.takeTurn('array');

        expect(feedback).to.equal('incorrect');
    })

    // Test #13

    it('should return percentage of correct guesses', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        const card4 = new Card(prototypeData[3]);

        const deck = new Deck([card1, card2, card3, card4]);
        
        const round = new Round(deck);

        round.takeTurn('object');
        round.takeTurn('guess 2');
        round.takeTurn('guess 3');
        round.takeTurn('guess 4');

        const percentCorrect = round.calculatePercentCorrect();

        expect(percentCorrect).to.equal('25% correct');
    });

    // Test #14

    it('should return a different percentage of correct guesses', function() {
        const card1 = new Card(prototypeData[0]);
        const card2 = new Card(prototypeData[1]);
        const card3 = new Card(prototypeData[2]);
        const card4 = new Card(prototypeData[3]);

        const deck = new Deck([card1, card2, card3, card4]);
        
        const round = new Round(deck);

        round.takeTurn('object');
        round.takeTurn('array');
        round.takeTurn('guess 3');
        round.takeTurn('guess 4');

        const percentCorrect = round.calculatePercentCorrect();

        expect(percentCorrect).to.equal('50% correct');
    });

});