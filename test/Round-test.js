const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

const card1 = new Card(
  1,
  'What allows you to define a set of related information using key-value pairs?',
  ['object', 'array', 'function'],
  'object'
);
const card2 = new Card(
  2,
  'What allows you to define a set of related information using commas and indexes?',
  ['object', 'array', 'function'],
  'array'
);
const card3 = new Card(
  3,
  'What is 1 + 1',
  ['0', '1', '2'],
  '2'
);

const deck = new Deck([card1, card2, card3])

describe('Round', function () {
  it('starts with a deck', function () {
    let round = new Round(deck)
    expect(round.deck).to.deep.equal(deck)
  });
  
  it('starts with no no turns taken', function () {
    let round = new Round(deck)
    expect(round.turns).to.equal(0)
  });
  
  it('starts with no incorrect guesses', function () {
    let round = new Round(deck)
    expect(round.incorrectGuesses).to.deep.equal([])
  });

  it('has a current card equal to the first card in the deck', function() {
    let round = new Round(deck)
    expect(round.returnCurrentCard()).to.deep.equal(card1)
  })

  describe('.takeTurn', function () {
    it('increases the turn count', function () {
      let round = new Round(deck)
      round.takeTurn('object')
      expect(round.turns).to.equal(1)
    });

    it('changes the current card', function () {
      let round = new Round(deck)
      round.takeTurn('object')
      expect(round.returnCurrentCard()).to.deep.equal(card2)
    });

    it('saves incorrect ids', function () {
      let round = new Round(deck)
      round.takeTurn('banana')
      expect(round.incorrectGuesses).to.deep.equal([1])
    });

    it('does not save correct ids', function () {
      let round = new Round(deck)
      round.takeTurn('object')
      expect(round.incorrectGuesses).to.deep.equal([])
    });

    it('records multiple incorrect guesses', function() {
      let round = new Round(deck)
      round.takeTurn('banana')
      round.takeTurn('array')
      round.takeTurn('bandana')
      expect(round.incorrectGuesses).to.deep.equal([1, 3])
    });
    
    it('returns feedback if an answer is correct', function() {
      let round = new Round(deck)
      expect(round.takeTurn('object')).to.equal('correct!')
    });

    it('returns feedback if an answer is incorrect', function() {
      let round = new Round(deck)
      expect(round.takeTurn('objection your honor')).to.equal('incorrect!')
    });
  });

  describe('.percentCorrect', function () {
    it('returns zero when all answers are wrong', function () {
      let round = new Round(deck)
      round.takeTurn('turkey')
      round.takeTurn('turnkey')
      expect(round.percentCorrect()).to.equal(0)
    });
    
    it('returns 100 when all answers are right', function () {
      let round = new Round(deck)
      round.takeTurn('object')
      round.takeTurn('array')
      expect(round.percentCorrect()).to.equal(100)
    });
    
    it('returns a rounded number when percent right is a fraction', function () {
      let round = new Round(deck)
      round.takeTurn('turkey')
      round.takeTurn('turnkey')
      round.takeTurn('2')
      expect(round.percentCorrect()).to.equal(33)
    });
  });
});