const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn')

describe('Round', function() {
    let round;
    let deck;
    let card1;
    let card2;
    let card3;
    beforeEach (() => {
        card1 = new Card({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        });
        card2 = new Card({
            "id": 14,
            "question": "Which iteration method can turn an array into a single value of any data type?",
            "answers": ["reduce()", "map()", "filter()"],
            "correctAnswer": "reduce()"
        });
        card3 = new Card({
            "id": 12,
            "question": "Which iteration method returns an array of the same length as the original array?",
            "answers": ["map()", "forEach()", "reduce()"],
            "correctAnswer": "map()"
        });

         deck = new Deck([card1, card2, card3]);
         round = new Round(deck);
         turn1 = new Turn("pug", card1);
         turn2 = new Turn("gallbladder", card2);
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should start out with 0 turns', function() {
        expect(round.turns).to.equal(0);
        // console.log(round.deck.deck)
    });

    it('should start out with an empty array of incorrect guesses', function() {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });
    
    // it('the current card should be the first card in the deck', function() {
    //     expect(round.deck).to.equal(deck);
    // });

    it('should make sure the current card is the first card in the deck', function() {
       expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should allow the user to take a turn', function() {
        expect(round.takeTurn).to.be.a('function');
    });

    it('should increase the turn count by 1 every time', function() {
        round.takeTurn();
        expect(round.turns).to.equal(1);
    });

    it('should evaluate the guess and give feedback', function() {
        let correct = round.takeTurn('object');
        expect(correct).to.equal('correct');
    });

    it('should store incorrect guess by id in the incorrect guesses array', function() {
        round.takeTurn('spleen');
        expect(round.incorrectGuesses).to.deep.equal([1]);
    });

    it('should return the percentage of correct guesses', function () {
        round.takeTurn('object');
        round.takeTurn('spleen');
        round.calculatePercentCorrect();
        expect(round.calculatePercentCorrect()).to.equal(50);
        //compare the number of guess to the number of turns
    })

    it('should end the round and return a statement', function() {
        round.takeTurn('object');
        round.takeTurn('spleen');
        expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!')
    })


});



//endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’


//calculatePercentCorrect: method that calculates and returns the percentage of correct guesses