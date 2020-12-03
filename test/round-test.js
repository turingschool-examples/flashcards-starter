const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should store deck of cards', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should have 0 turns by defualt', function() {
    expect(round.turns).to.equal(0);
  });

  it('should be no incorrect answers by defualt', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object'
    });
  });

  it('should return correct if guess matches answer', function() {
    expect(round.takeTurn('object')).to.equal('correct!');
  });

  it('should return incorrect if guess does not match answer', function() {
    expect(round.takeTurn()).to.equal('incorrect!');
  });

  it('should increase the turns property by one', function() {
    round.takeTurn('');
    round.takeTurn('');
    expect(round.turns).to.equal(2);
  });

  it('should move to the next card in deck after every turn', function() {
    round.takeTurn('');
    expect(round.returnCurrentCard()).to.deep.equal({
      id: 14,
      question: 'What organ is Khalid missing?',
      answers: ['spleen', 'appendix', 'gallbladder'],
      correctAnswer: 'gallbladder'
    });
  });

  it("should store the id's of questions answered incorrectly", function() {
    round.takeTurn('incorrect answer');
    expect(round.incorrectGuesses).to.deep.equal([1])
  })


})
