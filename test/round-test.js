const chai = require('chai');
const expect = chai.expect;

const { round, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { createDeck} = require('../src/deck');
const { createCard } = require('../src/card');
// const { evaluateGuess } = require('../src/turn');

describe('create round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  beforeEach(function() {
    card1 = createCard(
      1, 
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 
      'object');
    card2 = createCard(
      2, 
      'What is a comma-separated list of related values?', 
      ['array', 'object', 'function'], 
      'array');
    card3 = createCard(
      3, 
      'What type of prototype method directly modifies the existing array?', 
      ['mutator method', 'accessor method', 'iteration method'], 
      'mutator method');  
      deck = createDeck([card1, card2, card3]);
  });
  it('should be a function', function() {
    expect(round).to.be.a('function');
  });
  it('should have deck property, holding a deck object', function() {
    const round1 = round(deck)
    expect(round1.deck).to.deep.equal([card1, card2, card3])
  });
  it('should begin with currentCard property as first card in deck', function() {
    const round1 = round(deck)
    expect(round1.currentCard).to.deep.equal(card1)
  })
  it('should have a turn property starting at 0', function() {
    const round1 = round(deck)
    expect(round1.turns).to.equal(0)
  })
  it('should have an empty array property that stores incorrect guesses', function() {
    const round1 = round(deck)
    expect(round1.incorrectGuesses).to.deep.equal([])
  })
});

describe('take turn', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round1;
  beforeEach(function() {
    card1 = createCard(
      1, 
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 
      'object');
    card2 = createCard(
      2, 
      'What is a comma-separated list of related values?', 
      ['array', 'object', 'function'], 
      'array');
    card3 = createCard(
      3, 
      'What type of prototype method directly modifies the existing array?', 
      ['mutator method', 'accessor method', 'iteration method'], 
      'mutator method');  
      deck = createDeck([card1, card2, card3]);
      round1 = round(deck);
  });
  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });
  it('should update the turns count', function() {
    takeTurn('array', round1)
    expect(round1.turns).to.equal(1)
  });
  it('should change currentCard to the next card in the deck', function() {
    expect(round1.currentCard).to.deep.equal(card2)
  });
  it('should evaluate a guess', function() {
    var turn1 = takeTurn('function', round1)
    expect(turn1).to.equal('Incorrect - please try again.')
  });
});

describe('calculate percent correct', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round1;
  // let turn1;
  beforeEach(function() {
    card1 = createCard(
      1, 
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 
      'object');
    card2 = createCard(
      2, 
      'What is a comma-separated list of related values?', 
      ['array', 'object', 'function'], 
      'array');
    card3 = createCard(
      3, 
      'What type of prototype method directly modifies the existing array?', 
      ['mutator method', 'accessor method', 'iteration method'], 
      'mutator method');  
      deck = createDeck([card1, card2, card3]);
      round1 = round(deck);
      // turn1 = takeTurn('function', round1);
  });
  it('should be a function', function() {    
    // console.log('the round', round1)
    // console.log('the deck', deck)
    // console.log(turn1)
    expect(calculatePercentCorrect).to.be.a('function');
  });
  it('should calculate the percentage of correct guesses', function() {
  var round2 = {
      deck: deck,
      currentCard: deck[2],
      turns: 2,
      incorrectGuesses: [1]
    }
  var round2Percentage = calculatePercentCorrect(round2)
    // console.log(round2)
    expect(round2Percentage).to.equal(50)
  });
});

describe('end round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round2;
  let round2Percentage;
  beforeEach(function() {
    card1 = createCard(
      1, 
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 
      'object');
    card2 = createCard(
      2, 
      'What is a comma-separated list of related values?', 
      ['array', 'object', 'function'], 
      'array');
    card3 = createCard(
      3, 
      'What type of prototype method directly modifies the existing array?', 
      ['mutator method', 'accessor method', 'iteration method'], 
      'mutator method');  
      deck = createDeck([card1, card2, card3]);
      // round1 = round(deck);
    round2 = {
        deck: deck,
        currentCard: deck[2],
        turns: 2,
        incorrectGuesses: [1]
      }
    round2Percentage = calculatePercentCorrect(round2)
      // turn1 = takeTurn('function', round1);
  });
  it('should be a function', function() {    
    // console.log('the round', round1)
    // console.log('the deck', deck)
    // console.log(turn1)
    expect(calculatePercentCorrect).to.be.a('function');
  });
  it('should end a round', function() {
  var finalMsg = endRound(round2);
  expect(finalMsg).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  })
});
