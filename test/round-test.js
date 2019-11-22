const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');
const Round = require('../src/round');
const Deck = require('../src/deck');

describe('Round', function() {

  it('should be able to return the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  describe('takeTurn()', function() {

    it('should keep track of guesses', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      round.takeTurn('pug');
      expect(round.takeTurn()).to.equal('false, incorrect!');
    });

    it('should keep track of how many rounds have passed', function() {

      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      round.takeTurn('pug');
      expect(round.turn).to.equal(1);
      round.takeTurn('gallbladder');
      expect(round.turn).to.equal(2);
    })

    it('should keep track of incorrect guesses', function() {

      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      round.takeTurn('pug');
      expect(round.incorrectGuesses).to.deep.equal([1]);
    })

  })

  it('should be able to calculate the percentage of correct guesses', function() {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music');
    expect(round.calculatePercentCorrect()).to.equal(33);
  })

  it('should tell you the percentage of correct guesses you made', function() {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music');
    round.endRound();
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  })

});
