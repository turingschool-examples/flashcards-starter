const chai = require('chai');
const expect = chai.expect;

const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { evaluateGuess } = require('../src/turn');


describe('createRound', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create a round and its properties', function() {
    //SETUP
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    //EXECUTION
    const round = createRound(deck);
    //ASSERTION
    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.currentCard).to.deep.equal({
          id: 1,
          question: 'What is Robbie\'s favorite animal',
          answers: ['sea otter', 'pug', 'capybara'],
          correctAnswer: 'sea otter'
         });
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });  
});












describe('', function() {
  it('', function() {
    expect().to.be.a('function');
  });

  it('should...', function() {
    //SETUP
    //EXECUTION
    //ASSERTION
  });  
});