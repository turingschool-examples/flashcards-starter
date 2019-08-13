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

  it('should store an instance deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
  });

  it('should count update turn count', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('sea otter', card1);

    round.takeTurn(turn);
    expect(round.turnCount).to.equal(1);

    round.takeTurn(turn);
    expect(round.turnCount).to.equal(2);
  });

  it('should return current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('sea otter', card1);

    expect(round.turnCount).to.equal(0);

    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal(card1);

    round.takeTurn(turn);

    expect(round.turnCount).to.equal(1);

    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal(card2);
  });

  it('should be able to evaluate guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn1 = new Turn('sea otter', card1);
    const turn2 = new Turn('appendix', card2);

    round.takeTurn(turn1);
    expect(turn1.evaluateGuess()).to.equal(true);

    round.takeTurn(turn2);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should be able to add incorrect guess id to incorrect guesses array', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn1 = new Turn('sea otter', card1);
    const turn2 = new Turn('appendix', card2);

    round.takeTurn(turn1);
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(round.incorrectGuesses.length).to.equal(0);

    round.takeTurn(turn2);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(round.incorrectGuesses.length).to.equal(1);
  });

});
