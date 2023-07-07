const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/turns');
const { createRound } = require('../src/round')



describe('Round', function() {
    it('should correctly track the turns, incorrect guesses, and current card', function() {
      const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = createDeck([card1, card2, card3]);
      const round = createRound(deck);
      
      expect(round.deck).to.deep.equal([card1, card2, card3]);
      expect(round.currentCard).to.deep.equal(card1);
      expect(round.turns).to.equal(0);
      expect(round.incorrectGuesses).to.deep.equal([]);
      
      expect(round.takeTurn('sea otter')).to.equal('correct!');
      expect(round.turns).to.equal(1);
      expect(round.incorrectGuesses).to.deep.equal([]);
      expect(round.currentCard).to.deep.equal(card2);
      
      expect(round.takeTurn('spleen')).to.equal('incorrect!');
      expect(round.turns).to.equal(2);
      expect(round.incorrectGuesses).to.deep.equal([14]);
      expect(round.currentCard).to.deep.equal(card3);
    });
    
    it('should calculate and return the correct percentage of correct guesses', function() {
      const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = createDeck([card1, card2, card3]);
      const round = createRound(deck);
      
      round.takeTurn('sea otter');
      round.takeTurn('spleen');
      
      expect(round.calculatePercentCorrect()).to.equal(50);
    });
  });