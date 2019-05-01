const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'array');
    const deck = new Deck([card1, card2])
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'array');
    const deck = new Deck([card1, card2])
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to return current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'array');
    const turn = new Turn("object", card1)
    const deck = new Deck([card1, card2])
    const round = new Round(deck)
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('array')
    expect(round.returnCurrentCard()).to.equal(card2);
  });
  //
  it('should be able to take a turn', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'array');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'function');
    const turn = new Turn("object", card1)
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    expect(round.takeTurn('array')).to.equal('correct!');
    expect(round.takeTurn('object')).to.equal('correct!');
    expect(round.takeTurn('object')).to.equal('incorrect!');
  });

  it('should be able to push incorrectGuesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'array');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'function');
    const turn = new Turn("object", card1)
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    console.log(round.incorrectGuesses)
    round.takeTurn('object')
    expect(round.incorrectGuesses).to.eql([1]);

  });



});
