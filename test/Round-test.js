const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  beforeEach(function() {
    global.card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    global.card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    global.card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    global.deck = new Deck([card1, card2, card3]);
    global.round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck object', function() {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should store the current card starting with the first one', function() {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should store a turns property that initializes with a value of 0', function() {
    expect(round.turns).to.deep.equal(0);
  });

  it('should initialize with an incorrectGuesses property that is an empty array', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should have a method that returns the current card from the deck', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should have a method that takes a turn and moves to the next card', function() {
    round.takeTurn('sea otter');
    expect(round.turns).to.deep.equal(1);
    expect(round.currentCard).to.deep.equal(card2);
    expect(round.feedback).to.deep.equal('correct!');
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('spleen');
    expect(round.turns).to.deep.equal(2);
    expect(round.currentCard).to.deep.equal(card3);
    expect(round.feedback).to.deep.equal('incorrect!');
    expect(round.incorrectGuesses).to.deep.equal([14]);

    round.takeTurn('wrong answer');
    expect(round.turns).to.deep.equal(3);
    expect(round.feedback).to.deep.equal('incorrect!');
    expect(round.incorrectGuesses).to.deep.equal([14, 12]);
  });

  it('should have a method that calculates the percent score', function() {
    round.takeTurn('sea otter');
    expect(round.calculatePercentScore()).to.deep.equal(100);
    round.takeTurn('spleen');
    expect(round.calculatePercentScore()).to.deep.equal(50);
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentScore()).to.deep.equal(66.67);
  });

  it('should have a method that ends the round', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('Fitzgerald');

    expect(round.endRound()).to.contain('** Round over! ** You answered 66.67% of the questions correctly!');
  });
});
