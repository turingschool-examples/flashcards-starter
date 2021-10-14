const expect = require('chai').expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should have a deck of cards', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should be able able to return the current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    const currentCard = round.returnCurrentCard();

    expect(currentCard).to.deep.equal(card1)
  });
  
  it('should start with 0 turns', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should be able to store incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to give feedback if guess is correct', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    const turn = round.takeTurn('object');
    round.returnCurrentCard();

    expect(turn).to.equal('correct!');
  });

  it('should be able to give feedback if guess is incorrect', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    const turn = round.takeTurn('array');
    round.returnCurrentCard();

    expect(turn).to.equal('incorrect!');
  });

  it('should update turns everytime it makes a guess', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    round.takeTurn('object');
    round.returnCurrentCard();

    expect(round.turns).to.equal(1);
  });

  it('should update incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    round.takeTurn('array');
    round.returnCurrentCard();
    round.takeTurn('object');
    round.returnCurrentCard();

    expect(round.incorrectGuesses.length).to.equal(2)
    expect(round.incorrectGuesses).to.deep.equal([1, 2])
  });

  it('should return the current card after taking a turn', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);
    
    const round = new Round(deck);
    round.takeTurn('object');
    const cardInPlay = round.returnCurrentCard();

    expect(cardInPlay).to.deep.equal(card2);
  });

  it('should calculate the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);
    
    const round = new Round(deck);
    round.takeTurn('object');
    round.returnCurrentCard();
    round.takeTurn('object');
    round.returnCurrentCard();
    const percentOfCorrectGuess = round.calculatePercentCorrect();

    expect(percentOfCorrectGuess).to.equal(50);
  });

  it('should end the round and log the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    const deck = new Deck([card1, card2, card3]);
    
    const round = new Round(deck);
    round.takeTurn('object');
    round.returnCurrentCard();
    round.takeTurn('object');
    round.returnCurrentCard();
    round.takeTurn('object');
    round.calculatePercentCorrect();
    
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  });
});
