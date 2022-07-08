const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Turn', () => {
    const card = new Card(1, 'Who is Will\'s favorite superhero?', 
    ['Spider-Man', 'Thor', 'Hulk'], 'Spider-Man')
    const turn = new Turn('function', card);

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should have a string that represent\'s a user guess, and a card object for the current card in play.', () => {
        expect(turn).to.have.property('guess', 'function');
        expect(turn).to.have.property('card', card);
        expect(turn.guess).to.equal('function');
        expect(turn.card).to.be.an.instanceof(Card);
    });

    it('should have a method that returns the guess', () => {
        expect(turn.returnGuess()).to.equal('function')
    });

    it('should have a method that returns the Card', () => {
        expect(turn.returnCard()).to.deep.equal(card);
    });
    
    it('should have a method that returns a boolean indicating if the user’s guess matches the correct answer on the card', () => {
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should have a method that returns either \‘incorrect!\’ or \‘correct!\’ based on whether the guess is correct or not', () => {
        expect(turn.giveFeedback()).to.equal('incorrect');
    });
});