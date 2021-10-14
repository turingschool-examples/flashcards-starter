const expect = require('chai').expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round('array', deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should default currentCard to first card in deck', function() {
    expect(round.currentCard).to.equal(card1);
  });

  it('should be able to return currentCard', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should be able to update currentCard', function() {
    round.takeTurn('sea otter');
    expect(round.currentCard).to.equal(card2);
  });

  it('should default to 0 turns', function() {
    expect(round.turns).to.equal(0);
  });

  it('should be able to update turn count', function() {
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
  });

  it('should default to having no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to add incorrect guesses', function() {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('spleen');
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should be able to give feedback', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');

    expect(round.takeTurn('spleen')).to.equal('incorrect!');
  });

  it('should be able to return percentage of correct guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('Lex');
    expect(round.calculatePercentCorrect()).to.equal('33%');
  });

  it('should be able to end round', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('Lex');

    expect(round.endRound()).to.equal(`** Round over! ** You answered 33% of the questions correctly!`);
  });
});
