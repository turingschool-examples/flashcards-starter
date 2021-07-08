const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const deck = new Deck([card1]);

    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should take in a deck of cards as an argument', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should start with a default turn count of 0', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const deck = new Deck([card1]);

    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  describe('returnCurrentCard()', function() {

    it('should return the current card', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      const current = round.returnCurrentCard();

      expect(current).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    });
  });

  describe('takeTurn()', function() {

    it('should be able to update the turn count', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      round.takeTurn('pug');

      expect(round.turns).to.equal(1);
    });

    it('should let the user know if their guess was correct or incorrect', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      const result = round.takeTurn('sea otter');
      const result2 = round.takeTurn('appendix');

      expect(result).to.equal('correct!');
      expect(result2).to.equal('incorrect!');
    });

    it('should store an array of id\'s of incorrectly guessed cards', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      round.takeTurn('pug');

      expect(round.incorrectGuesses).to.deep.equal([1]);
    });

    it('should move on to the next card', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      round.takeTurn('pug');

      expect(round.currentCard).to.deep.equal({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    });
  });

  describe('calculatePercentCorrect()', function() {

    it('should return the percent of questions answered correctly', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      round.takeTurn('sea otter');
      round.takeTurn('gallbladder');
      const percent = round.calculatePercentCorrect();

      round.takeTurn('watching Netflix');
      const percent2 = round.calculatePercentCorrect();

      expect(percent).to.equal(100);
      expect(percent2).to.equal(67);
    });
  });

  describe('endRound()', function() {

    it('should let the user know the round is over and print the score for the round', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);

      round.takeTurn('sea otter');
      round.takeTurn('gallbladder');
      round.takeTurn('playing with bubble wrap');

      const end = round.endRound();

      expect(end).to.deep.equal('**Round over!** You answered 100% of the questions correctly!');
    });
  });
});
