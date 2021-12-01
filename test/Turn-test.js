const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
    let card;
    let turn;
    beforeEach(function() {
        card = new Card(1, 'What was the last year the Los Angeles Lakers won the Championship?', [2010, 2005, 2015, 2020], 2020);
        turn = new Turn(2020, card);
    });
    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
      });
    it('should have current card as an instance of Card', function() {
        expect(turn.currentCard).to.be.a('object');
    });
    it('should have a method that returns user guess', function() {

        turn.returnGuess();

        expect(turn.returnGuess()).to.equal(turn.userGuess);
    });

    it('should have a method that returns the card', function() {

        turn.returnCard();

        expect(turn.returnCard()).to.equal(card);
    });

    it('should have a method that determines if user guess matches correct answer', function() {

        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should have a method that returns correct or incorrect to player', function() {

        expect(turn.giveFeedback()).to.equal('correct!');
    });
});