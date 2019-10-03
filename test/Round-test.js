const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card being played', function() {
    round.returnCurrentCard();

    let expected = card1
    let actual = round.returnCurrentCard();

    expect(actual).to.equal(expected);
  });

  it('increase the turn count', function() {
    round.takeTurn('pug');

    let actual = round.turns;
    let expected = 1;

    expect(actual).to.equal(expected);
  });

  it('should add incorrect guess to array', function() {
    round.takeTurn('pug');

    let actual = round.incorrectGuesses.length;
    let expected = 1;

    expect(actual).to.equal(expected);
  });

  it('should remove card from deck', function() {
    round.takeTurn('pug');

    let actual = round.returnCurrentCard();
    let expected = card2;

    expect(actual).to.equal(expected);
  });

  it('should calculate the correct guess percentage', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder')

    let actual = round.calculatePercentCorrect();
    let expected = 50;

    expect(actual).to.equal(expected);
  });

  it('should print Round Over statement', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');

    let actual = round.endRound();
    let expected = `**Round over!** You answered 66% of the questions correctly!`
    
    expect(actual).to.equal(expected);
  });
  
  
  
})
