const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function () {
    let turn;
    let deck;
    let round;
    let card1;
    let card2;
    let card3;

    beforeEach(() => {
    turn = new Turn('object', card1)
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceof(Round);
    })

    it('should return the current card being played', function() {
        expect(round.returnCurrentCard()).to.deep.equal(card1)
    });
    
    it('should create a new instance of Turn when guess is made', function() {
        round.takeTurn('object')
        // remember to invoke the METHOD!!!!!  otherwise it won't instantiate a new turn!
        expect(round.currentGuess).to.be.an.instanceof(Turn);
    });
    // a scenario i am CREATING
    // I want to take a turn and check if the new turn is an instance
    // In my Round class, this.currentGuess is undefined UNTIL round.takeTurn is invoked!!
    // Remmeber in mythical creatures, methods were invoked in the test to get the desired result
    
    it('should update the turn count', function() {
        round.takeTurn('object')
        expect(round.turns).to.equal(1);
    });

    it('should make the next card the current card', function() {
        round.takeTurn('array')
        expect(round.returnCurrentCard()).to.equal(card2)

        round.takeTurn('mutator method')
        expect(round.returnCurrentCard()).to.equal(card3)
    });

    it('should evaluate incorrect guesses', function() {
        round.takeTurn('function')
        // expect(round.incorrectGuesses).to.equal('function')
        expect(round.incorrectGuesses[0]).to.equal(1);

        round.takeTurn('function')
        expect(round.incorrectGuesses[1]).to.equal(2);
    });

    it('should store the card id of incorrect guesses', function() {
        round.takeTurn('object')
        round.takeTurn('function')
        round.takeTurn('mutator method')

        expect(round.incorrectGuesses[0]).to.equal(2)
    });

    it('should give feedback about a correct or incorrect guess', function() {
        expect(round.takeTurn('object')).to.equal('Correct!')
        expect(round.takeTurn('function')).to.equal('Incorrect!')
    });

    it('should calculate the percent of correct guesses', function() {
        round.takeTurn('object')
        round.takeTurn('function')
        round.takeTurn('mutator method')

        expect(round.incorrectGuesses[0]).to.equal(2)
        expect(round.calculatePercentCorrect()).to.equal(67)
    });

    it('should have a method that notifies that the round is over', function() {
        round.takeTurn('object')
        round.takeTurn('function')
        round.takeTurn('mutator method')

        // expect(round.endRound()).to.equal('** Round over! ** You answered % of the questions correctly!')
    });
});