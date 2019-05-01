const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });   

  it('should show the deck of cards', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck.cards).to.eql([card1, card2, card3]);
  })

  it('should return the current card in the deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  })

  it('should start counting turns once the players start playing', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('array', card1)

    expect(round.turns).to.equal(0);
    round.takeTurn('array', card1);
    expect(round.turns).to.equal(1);
  })

  it('should update the current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('array', card1);

    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0);

    round.takeTurn('array', card1);
    
    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);
  })

it('should store the incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('array', card1);


    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0);  

    round.takeTurn('array', card1);
    
    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(1);
  })

it('should calculate and return the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('array', card1);
    
    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0);  

    round.takeTurn('array', card1);
    
    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);

    round.takeTurn('array', card2)

    expect(round.calculatePercentCorrect()).to.equal(50);
  })

it('should print a message at the end of the round', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('array', card1);
    
    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0);  

    round.takeTurn('array', card1);
    
    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);

    round.takeTurn('array', card2)
    round.calculatePercentCorrect();
    round.endRound();

    expect(round.endRound()).to.equal(`**Round over!** You answered 50% of the questions correctly!`);

  })


});