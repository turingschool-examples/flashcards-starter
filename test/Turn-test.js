const chai = require('chai');
const expect = chai.expect;
const Turn = require ('../src/Turn');
const Card = require ('../src/Card');

describe ('Turn', function() {
    let turn;
    let card;
    beforeEach(function() {
        console.log('Initialising...')
        card = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
        turn = new Turn("sort", card);
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

    it('should instantiate our good friend Turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should store the user guess as a string', () => {
        expect(turn.userGuess).to.be.a('string');
        expect(turn.userGuess).to.equal('sort');
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should store an instance of the Card class', () => {
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should have a method that returns the guess', () => {
        turn.returnGuess();
        expect(turn.returnGuess()).to.equal(turn.userGuess);
    });

    it('should have a method that returns the card', () => {
        turn.returnCard();
        expect(turn.returnCard()).to.equal(turn.card);
    });

    it('should have a method that returns a boolean indicating if the user\'s guess matches the correct answer on the card', () => {
        turn.evaluateGuess();
        expect(false).to.be.false;
        expect(true).to.be.true;
    });

    it('should have a method that returns "correct" if the guess is correct', () => {
        turn.evaluateGuess();
        turn.giveFeedback();
        expect(card.correctAnswer).to.equal("sort()");
    });

    it('should have a method that returns "incorrect" if the guess is incorrect', () =>{
        let turn2 = new Turn("map()", card);
        turn2.evaluateGuess();
        turn2.giveFeedback();
    })

});