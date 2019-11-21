const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1]);
    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1]);
    const round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const currentCard = round.returnCurrentCard();

    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should keep track of how many turns have been made', function() {
    const guess1 = 'array';
    const guess2 = 'array';
    const guess3 = 'accessor method';
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn(guess1, card1);
    round.takeTurn(guess2, card2);
    round.takeTurn(guess3, card3);

    expect(round.turns).to.equal(3);
  });

  it('should update the current card to be the next card in the deck after a guess is made', function() {
    const guess1 = 'array';
    const guess2 = 'array';
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);

    round.takeTurn(guess1, card1);

    expect(round.currentCard).to.equal(card2);
  });

  it('should not update incorrectGuesses if the guess is incorrect', function() {
    const guess1 = 'object';
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1]);
    const round = new Round(deck);

    round.takeTurn(guess1, card1);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should update incorrectGuesses if the guess is incorrect', function() {
    const guess1 = 'array';
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1]);
    const round = new Round(deck);

    round.takeTurn(guess1, card1);

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should calculate the percentage of correct answers and display that percentage when the round is over', function() {
    const guess1 = 'array';
    const guess2 = 'array';
    const guess3 = 'accessor method';
    const guess4 = 'mutator method'
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const card4 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    round.takeTurn(guess1, card1);
    round.takeTurn(guess2, card2);
    round.takeTurn(guess3, card3);
    round.takeTurn(guess4, card4);
    round.calculatePercentCorrect();
    round.endRound();

    expect(round.calculatePercentCorrect()).to.equal(25);
    expect(round.endRound()).to.equal('** Round over! ** You answered 25% of the questions correctly!');
  });


});






// aaaaaaaa
