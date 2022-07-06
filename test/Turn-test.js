const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
    it('should be a function', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(Turn).to.be.a('function');
    });
    it('should be able to take in the current card at play', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.currentCard).to.equal(card);
    });
    it('should be able to take in a user guess', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.userGuess).to.equal('pug');
    });
    it('should be able to return current card', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.returnCard()).to.equal(card);
    });
    it('should be able to return the user guess', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.returnGuess()).to.equal('pug');
    });
    it('should be able to evaluate guess', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.evaluateGuess()).to.equal(false);
    });
    it('should give feedback', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.giveFeedback()).to.equal(`incorrect!`);
    });
});
// console.log(card);