const chai = require('chai');
const Card = require('../src/Card');
const Turns = require('../src/Turns');
const expect = chai.expect;

describe('Turns', function() {

    it.skip('should be a function', function() {
        const turns = new Turns();
        expect(Turns).to.be.a('function');
    });

    it.skip('should store user\'s guess', function() {
        const turns = new Turns('otter');
        expect(turns.userGuess).to.equal('otter')
    });

    it.skip('should store Card class as argument', function() {
        const card = new Card((1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'));
        const turns = new Turns('guess', {id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:  'sea otter'})
        expect(turns.card).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:  'sea otter'});
    });
    it.skip('should return the guess', function() {
        const turns = new Turns( 'sea otter');
        expect(turns.returnGuess()).to.equal( 'sea otter');
    });
    it.skip('should return the Card', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter')
        const turns = new Turns('guess', {id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:  'sea otter'});
        expect(turns.returnCard()).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:  'sea otter'});
    });
    it.skip('should return true if user\'s guess is correct', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        const turns = new Turns('sea otter', {id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:  'sea otter'});

        expect(turns.evaluateGuess()).to.deep.equal(true)
    });
    it.skip('should return false if user\'s guess is incorrect', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        const turns = new Turns('pug', {id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:  'sea otter'});

        expect(turns.evaluateGuess()).to.deep.equal(false)
    });
    it.skip('should return correct if guess is correct', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        const turns = new Turns('sea otter', {id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:  'sea otter'});

        expect(turns.giveFeedback()).to.deep.equal('Correct!')
    });
    it.skip('should return incorrect if guess is incorrect', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        const turns = new Turns('pug', {id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:  'sea otter'});

        expect(turns.giveFeedback()).to.deep.equal('Incorrect!')
    })
})