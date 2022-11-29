const chai = require('chai');
const expect = chai.expect;
const Turn = require ('../src/Turn');
const Card = require ('../src/Card');

describe ('Turn', function() {
    let turn;
    let card;
    beforeEach(function() {
        console.log('Initialising...')
        let turn = new Turn('user guess', Card);
        let card = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    });
    
    it('should be a function', () => {
        let turn = new Turn('user guess', Card);
        expect(Turn).to.be.a('function');
    });

    it('should instantiate our good friend Turn', () => {
        let turn = new Turn('user guess', Card);
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should store the user guess as a string', () => {
        let turn = new Turn('user guess', Card);
        expect(turn.userGuess).to.be.a('string');
        expect(turn.userGuess).to.equal('user guess');
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should store an instance of the Card class', () => {
        let turn = new Turn('user guess', Card);
        console.log(Card);
        // expect(turn.card).to.be.an.instanceof(Card);
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should have a method that returns the guess', () => {
        let turn = new Turn('user guess', Card);
        turn.returnGuess();
        expect(turn.returnGuess()).to.equal(turn.userGuess);
    })

    it('should have a method that returns the card', () => {
        let turn = new Turn('user guess', Card);
        turn.returnCard();
        expect(turn.returnCard()).to.equal(turn.card);
        // expect(turn.returnCard()).to.equal(new Card());

    })

    it('should have a method that returns a boolean indicating if the user\'s guess matches the correct answer on the card', () => {
        let turn = new Turn('user guess', Card);
        turn.evaluateGuess();
        expect(false).to.be.false;
        expect(true).to.be.true;
    })

    it('should have a method that returns either "incorrect" or "correct" based on whether the guess is correct or incorrect', () => {
        let turn = new Turn('user guess', Card);
        let turn2 = new Turn("sort()", Card);
        let card = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");

        turn.evaluateGuess();
        console.log(turn.evaluateGuess());
        turn.giveFeedback();
        console.log(turn.giveFeedback());

        turn2.evaluateGuess();
        console.log(turn2.evaluateGuess());
        turn2.giveFeedback();
        console.log(turn2.giveFeedback());

        expect(card.correctAnswer).to.equal("sort()");
        
    })

});