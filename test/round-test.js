const chai = require('chai');
const expect = chai.expect;

const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');


describe('createRound', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create a round and its properties', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const card3 = createCard(17, 'What does the reduce() method take in?', ['callback function and initializer', 'callback function and current element', 'callback function and accumulator'], 'callback function and initializer');
    const deck = createDeck([card1, card2, card3]);
    
    const round = createRound(deck);

    expect(round.deck).to.deep.equal(
      [
        {id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'},
        {id: 5, question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'iteration method'},
        {id: 17, question: 'What does the reduce() method take in?', answers: ['callback function and initializer', 'callback function and current element', 'callback function and accumulator'], correctAnswer: 'callback function and initializer'}
      ]);
    expect(round.currentCard).to.deep.equal({
           id: 1,
           question: 'What allows you to define a set of related information using key-value pairs?',
           answers: ['object', 'array', 'function'],
           correctAnswer: 'object'
         });
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });  
});

describe('takeTurn', function() {
  let card1, card2, card3, deck, round, guess1, guess2;
  beforeEach(function () {
    card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    card3 = createCard(17, 'What does the reduce() method take in?', ['callback function and initializer', 'callback function and current element', 'callback function and accumulator'], 'callback function and initializer');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });

  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it('should declare correct if user guess is correct', function() {
    const correctGuess = 'object';
    
    const turn = takeTurn(correctGuess, round);

    expect(turn).to.equal('Correct!');
  });  

  it('should declare incorrect if user guess is incorrect', function() {
    const incorrectGuess = 'array';
    
    const turn = takeTurn(incorrectGuess, round);

    expect(turn).to.equal('Incorrect!');
  });  

  it('should update the round and its properties after each turn', function() {
    const firstGuess = 'object';
    const secondGuess = 'mutator method';
    
    takeTurn(firstGuess, round);

    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.currentCard).to.deep.equal({
           id: 5,
           question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
           answers: ['mutator method', 'accessor method', 'iteration method'],
           correctAnswer: 'iteration method'
         });

    takeTurn(secondGuess, round);

    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([5]);
    expect(round.currentCard).to.deep.equal({
           id: 17,
           question: 'What does the reduce() method take in?',
           answers: ['callback function and initializer', 'callback function and current element', 'callback function and accumulator'],
           correctAnswer: 'callback function and initializer'
         });
  });  
});  
  
describe('calculatePercentCorrect', function() {
  let card1, card2, card3, deck, round, guess1, guess2, guess3;
  beforeEach(function () {
    card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    card3 = createCard(17, 'What does the reduce() method take in?', ['callback function and initializer', 'callback function and current element', 'callback function and accumulator'], 'callback function and initializer');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
    guess1 = 'object';
    guess2 = 'mutator method';
    guess3 = 'callback function and initializer';
  });
  
  it('should be a function', function() {
    expect(calculatePercentCorrect).to.be.a('function');
  });

  it('should calculate the percentage of correct guesses', function() {
    takeTurn(guess1, round);
    takeTurn(guess2, round);
    takeTurn(guess3, round);

    const percentCorrect = calculatePercentCorrect(round);

    expect(percentCorrect).to.equal(66.67);
  });  
});

describe('endRound', function() {
  let card1, card2, card3, deck, round, guess1, guess2, guess3;
  beforeEach(function () {
    card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    card3 = createCard(17, 'What does the reduce() method take in?', ['callback function and initializer', 'callback function and current element', 'callback function and accumulator'], 'callback function and initializer');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
    guess1 = 'object';
    guess2 = 'mutator method';
    guess3 = 'callback function and initializer';
  });
  
  it('should be a function', function() {
    expect(endRound).to.be.a('function');
  });

  it('should declare end of round message and percent correct', function() {
    takeTurn(guess1, round);
    takeTurn(guess2, round);
    takeTurn(guess3, round);

    const endRoundMessage = endRound(round);

    expect(endRoundMessage).to.equal(`** Round over! ** You answered 66.67% of the questions correctly!`);
  });  
});





