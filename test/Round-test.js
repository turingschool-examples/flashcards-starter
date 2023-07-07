const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');

const { createCard, evaluateGuess } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('round', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);  

  it('should be a function', function() {
    expect(createRound).to.be.a('function')  
  });

  it('should create a deck and its properties', function() {
    expect(round.deck).to.equal(deck);
    expect(round.currentCard).to.equal(deck[0]);
    expect(round.turns).to.deep.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });  

  it('should be a function', function() {
    expect(takeTurn).to.be.a('function')  
  });

  it('should be equal to corrrect', function(){
    const feedback = takeTurn('sea otter', round)
    expect(feedback).to.equal('correct!');
  })

  it('should increase the number of turns', function(){
    expect(round.turns).to.equal(1);
  })

  it('should continue to the next card', function(){
    expect(round.currentCard).to.equal(deck[1]);
  })

  it('should be equal to incorrrect', function(){
    expect(takeTurn('sea otter', round)).to.equal('incorrect!');
  })

  it('should show 1 incorrect guess', function(){
    expect(round.incorrectGuesses).to.deep.equal([14]);
  })

  it('should increase the number of turns', function(){
    expect(round.turns).to.equal(2);
  })

  it('should continue to the next card', function(){
    expect(round.currentCard).to.equal(deck[2]);
  })

});

describe('calculates percentage of correct guesses', function() {

  takeTurn
  it('should be a function', function() {
    expect(calculatePercentCorrect).to.be.a('function')  
  });

  it('should be equal to 50', function() {
    const round = {turns: 8, incorrectGuesses:[12, 54, 1, 28]} 

    const percent = calculatePercentCorrect(round)
    expect(percent).to.equal(50)  
  });

  it('should be equal to 75', function() {
    const round = {turns: 8, incorrectGuesses:[12, 54]} 

    const percent = calculatePercentCorrect(round)
    expect(percent).to.equal(75)  
  });
});

describe('end the round', function() {

  it('should print the end of round announcement with percent correct', function() {
    const round = {turns: 8, incorrectGuesses:[12, 54]} 
    const endGameAnnouncement = endRound(round)
    expect(endGameAnnouncement).to.equal('** Round over! ** You answered 75% of the questions correctly!')  
  });
});
