const chai = require('chai');
const expect = chai.expect;
const Round = require ('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function () {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should show the cards in the deck', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck.cards).to.eql([card1, card2, card3]);
  });

  it('should return the current card being played', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
  })

  it('should increase the turns counter by 1 every time someone takes a turn', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
    round.takeTurn('pug', card1);
    expect(round.turns).to.equal(1);
  });

  it('should update the current card', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn();

    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0);
    
    round.takeTurn('pug', card1)
    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);

    round.takeTurn('pug', card1)
    expect(round.returnCurrentCard()).to.equal(card3);
    expect(round.turns).to.equal(2);
  });

  it('should evaluate and record the guess, and send incorrect guesses to the incorrectGuesses array', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('pug', card1);

    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0);

    round.takeTurn('pug', card1)

    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(1); 
  });
  it('should calculate and return percentage of correct guesses', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('pug', card1);

    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0);

    round.takeTurn('sea otter', card1)

    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);

    round.takeTurn('appendix', card2)
    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should print a message when the round has ended', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('pug', card1);

    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0);

    round.takeTurn('sea otter', card1)

    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);

    round.takeTurn('appendix', card2)
    round.calculatePercentCorrect();
    round.endRound();

    expect(round.endRound()).to.equal(`**Round over!** You answered 50% of the questions correctly!`)
  });

});