const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a first card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.returnCurrentCard();
    expect(round.currentCard).to.equal(deck.allCards[0])
  });

  it('should increase number of turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.returnCurrentCard();
    round.takeTurn('pug');

    expect(round.turns).to.equal(1);
  });

  it('should instantiate a new Turn object when a new turn has been taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.returnCurrentCard();
    round.takeTurn('pug');

    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should move to the next card after a turn has been taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.returnCurrentCard();
    round.takeTurn('pug');
    round.returnCurrentCard();
    var currentCard = round.returnCurrentCard();

    const turn = new Turn();
    expect(currentCard).to.deep.equal(card2);
  })

  it('should evaluate whether a guess is correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    const turn = new Turn();
    const turn2 = new Turn();

    round.returnCurrentCard();
    round.takeTurn('pug');
    round.returnCurrentCard();
    round.takeTurn('gallbladder');

    expect(round.takeTurn('pug')).to.equal('incorrect!');
    expect(round.takeTurn('gallbladder')).to.equal('correct!');
  })

  it('should add the id of the card  to the incorrect guesses array if the answer is wrong', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    const turn = new Turn();

    round.returnCurrentCard();
    round.takeTurn('pug');

    expect(round.incorrectGuesses).to.deep.equal([round.currentCard.id]);
  })

  it('should calculate the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    const turn = new Turn();

    round.returnCurrentCard();
    round.takeTurn('pug');
    round.returnCurrentCard();
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music');
    round.returnCurrentCard();
    round.calculatePercentCorrect();

    var correctGuesses = deck.allCards.length -round.incorrectGuesses.length;
    var percentageCorrect = (correctGuesses/deck.allCards.length) * 100;

    expect(round.calculatePercentCorrect()).to.equal(Math.floor(percentageCorrect));
  })

  it('should console.log a message indicating the amount of correct answers', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    const turn = new Turn();

    round.returnCurrentCard();
    round.takeTurn('pug');
    round.returnCurrentCard();
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music');
    round.returnCurrentCard();
    round.calculatePercentCorrect();
    round.endRound();

    var correctAnswers = round.calculatePercentCorrect();

    expect(round.endRound()).to.equal(`** Round over! ** You answered ${correctAnswers} of the questions correctly!`);
  })
});
