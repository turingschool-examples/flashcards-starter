const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn')
const Round = require('../src/Round');
const prototypeData = require('../src/data');

describe('Round', function() {
    let cardsArray;
    let newDeck;
    beforeEach(function() {
        cardsArray = [new Card(prototypeData[0]), new Card(prototypeData[1]), new Card(prototypeData[2])];
        newDeck = new Deck(cardsArray);
        newRound = new Round(newDeck);
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should instantiate a new Round', function() {
        expect(newRound).to.be.an.instanceof(Round);
    }); 

    it('should instantiate with a turn counter, a deck of cards and start with first card in the deck as the current card', function() {

        expect(newRound.turns).to.equal(0);
        expect(newRound.deck.cards.length).to.equal(3);
        expect(newRound.currentCard).to.deep.equal({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        });
    });

    it('should return the current card', function() {
        expect(newRound.returnCurrentCard()).to.deep.equal({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        });
        //take turn
        //return next card
    });

    it('should take a turn when a guess is made', function() {
        const guess = 1;
        
        newRound.takeTurn(guess);

        expect(newRound.currentTurn).to.be.an.instanceof(Turn);
        expect(newRound.turns).to.equal(1);
    });

    it('should start with first card in deck on first turn and advance one for each subsequent turn', function() {
        newRound.takeTurn();

        expect(newRound.turns).to.equal(1)
        expect(newRound.currentCard).to.deep.equal(newDeck.cards[0]);

        newRound.takeTurn();
        newRound.takeTurn();

        expect(newRound.turns).to.equal(3)
        expect(newRound.currentCard).to.deep.equal(newDeck.cards[2]);
    });

    it('should evaluate the guess and record any incorrect guesses on each turn', function() {
        const guess1 = 'object';
        const guess2 = 'function';
        
        expect(newRound.takeTurn(guess1)).to.equal('correct!');
        expect(newRound.currentTurn.correct).to.equal(true);

        expect(newRound.takeTurn(guess2)).to.equal('incorrect!');
        expect(newRound.currentTurn.correct).to.equal(false);
    });
    it('should collect the ids of any questions answered incorrectly', function() {
        const guess = 'array';

        newRound.takeTurn(guess)
        newRound.takeTurn(guess)
        newRound.takeTurn(guess)

        expect(newRound.wrongAnswers).to.deep.equal([1, 3]);
    });

    it('should calculate the percentage of correct guesses', function () {
        
        newRound.takeTurn('object');
        newRound.takeTurn('array');
        newRound.takeTurn('grass');


        expect(newRound.calculatePercentCorrect()).to.equal('30%');
    })
    it('should tell the user their percentage of correct answers at the end of the game', function (){
        newRound.takeTurn('object');
        newRound.takeTurn('array');
        newRound.takeTurn('grass');

        expect(newRound.endRound()).to.equal('** Round over! ** You answered 30% of the questions correctly!');
    });
    // it('', function() {
    //     expect().to.deep.equal();
    // });
});