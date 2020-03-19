const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  let deck, round;

  beforeEach('deck and round instances', function() {
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update turns count', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
    round.takeTurn('spleen');
    expect(round.turns).to.equal(2);
  });

  it('should update update current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('sea otter');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should store incorrect guesses', function() {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('appendix');
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should give feedback ‘incorrect!’ or ‘correct!‘', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('should print ** Round over! ** and correct answers %', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('William');
    expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!');
  });
});
