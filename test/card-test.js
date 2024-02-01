const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {
    it('should be a function', function() {
    expect(createCard).to.be.a('function');
    });

    it('should create a card and its properties', function() {
    const card = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What is Robbie\'s favorite animal');
    expect(card.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
    expect(card.correctAnswer).to.equal('sea otter');
    });  
});

describe('response', function() {
    it('should be a function', function(){
    expect(evaluateGuess).to.be.a('function');
    });

    it('should return incorrect if guess is not correct', function(){
    const card = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const response = evaluateGuess('pug', card);
    expect(response).to.equal('incorrect!')
    })

    it('should return correct if guess is correct', function(){
    const card = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const response = evaluateGuess('sea otter', card);
    expect(response).to.equal('correct!')
    })
})

  