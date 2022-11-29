const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
    let turn1
    let turn2
    let card1
    let card3
    beforeEach(() =>{
        card1 = new Card(1, 'what is your favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter')
        card3 = new Card( 3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
        turn1 = new Turn('pug', card1)
        turn2 = new Turn('mutator method', card3)
    });

    it('should be a function', function() {
        expect(Turn).to.be.a('function')
    });

    it('should be an instance of turn', function() {
        expect(turn1).to.be.an.instanceOf(Turn)
    });

    it('should be able to have a guess', function() {
        expect(turn1.guess).to.equal('pug')
        expect(turn2.guess).to.equal('mutator method')
    });

    it('should be able to have a current card', function (){
        expect(turn1.guess).to.equal('pug')
        expect(turn1.currentCard).to.equal(card1)
    });

    it('should be able to return a guess', function() {
        expect(turn1.returnGuess()).to.equal('pug')
        expect(turn2.returnGuess()).to.equal('mutator method')
    });

    it('should be able to return a card', function() {
        expect(turn1.returnCard()).to.equal(card1)
        expect(turn2.returnCard()).to.equal(card3)
    });

    it('should evaluate the users correct guess as true', function() {
        expect(turn2.evaluateGuess()).to.equal(true)
    });

    it('should evaluate the users incorrect guess as false', function() {
        expect(turn1.evaluateGuess()).to.equal(false)
    });

    it('should return a message if incorrect', function() {
        expect(turn1.evaluateGuess()).to.equal(false)
        expect(turn1.giveFeedback()).to.equal('incorrect!')
    });

    it('should return a message if the guess was correct', function() {
        expect(turn2.evaluateGuess()).to.equal(true)
        expect(turn2.giveFeedback()).to.equal('correct!')
    })
});