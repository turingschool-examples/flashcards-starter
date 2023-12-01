const chai = require('chai');
const expect = chai.expect;

const { createCard, createDeck, createRound, evaluateGuess, countCards } = require('../src/card');
const { prototypeData } = require('../src/data')

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  

  it('should create a unique card for each call', function() {
  const card1 = createCard(1, 'Question 1', ['a', 'b', 'c'], 'a');
  const card2 = createCard(2, 'Question 2', ['x', 'y', 'z'], 'x');
  
    expect(card1).to.not.deep.equal(card2);
  });

  it('should handle different types of answers', function() {
  const card = createCard(1, 'Generic questions should work, right?', ['Yes', 'No', 'Maybe'], 'Yes');
  
    expect(card.answers).to.deep.equal(['Yes', 'No', 'Maybe']);
  });

  it('should handle an empty array of possible answers', function() {
  const card = createCard(1, 'Question', [], 'Answer');
  
    expect(card.answers).to.deep.equal([]);
  });
});

describe('turns', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return "correct!" for a correct guess', function() {
    const questionWithID8 = prototypeData.find(question => question.id === 8);
    const result = evaluateGuess('callback function', cards[0].correctAnswer);
    expect(result).to.equal('correct!');
  });

  it('should return "incorrect!" for an incorrect guess', function() {
    const questionWithID8 = prototypeData.find(question => question.id === 8);
    const result = evaluateGuess('an array', cards[0].correctAnswer);
    expect(result).to.equal('incorrect!');
  });

  it('should handle case-insensitive comparisons', function() {
    const questionWithID8 = prototypeData.find(question => question.id === 8);
    const result = evaluateGuess('CaLlBack fUnctiOn', cards[0].correctAnswer.toUpperCase());
    expect(result).to.equal('correct!');
  });

  it('should handle different types of answers', function() {
    const questionWithID8 = prototypeData.find(question => question.id === 8);
    const result = evaluateGuess(42, cards[0].correctAnswer);
    expect(result).to.equal('incorrect!');
  });
});

describe('deck', function() {
  it('should create a deck with the correct number of cards', function() {
    const deck = createDeck(prototypeData);

    expect(deck.cards).to.be.an('array').with.lengthOf(prototypeData.length);
    deck.cards.forEach(card => {
      expect(card).to.be.an('object');
      expect(card.id).to.be.a('number');
      expect(card.question).to.be.a('string');
      expect(card.answers).to.be.an('array');
      expect(card.correctAnswer).to.be.a('string');
    });
  });

  it('should know how many cards are in the deck', function() {
    const deck = createDeck(prototypeData);
    const numCards = countCards(deck);
    expect(numCards).to.equal(prototypeData.length);
  });
});

describe('round', function() {
  let deck = createDeck(prototypeData);
  let round = createRound(deck);

  it('should have a deck property that holds onto the deck object', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should have a currentCard property that starts as the first card in the deck', function() {
    expect(round.currentCard).to.equal(deck.cards[0]);
  });

  it('should have a turns property that starts as 0', function() {
    expect(round.turns).to.equal(0);
  });

  it('should have an incorrectGuesses property that starts as an empty array', function() {
    expect(round.incorrectGuesses).to.be.an('array').that.is.empty;
  });

  it('should have a takeTurn method that updates the turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', function() {
    expect(round.takeTurn('Object.keys()')).to.equal('incorrect!');
    expect(round.turns).to.equal(1);
    expect(round.currentCard).to.equal(deck.cards[1]);
    expect(round.incorrectGuesses).to.deep.equal([8]);

    expect(round.takeTurn('splice()')).to.equal('incorrect!');
    expect(round.turns).to.equal(2);
    expect(round.currentCard).to.equal(deck.cards[2]);
    expect(round.incorrectGuesses).to.deep.equal([8, 2]);

    expect(round.takeTurn('true')).to.equal('correct!');
    expect(round.turns).to.equal(3);
    expect(round.currentCard).to.equal(deck.cards[3]);
    expect(round.incorrectGuesses).to.deep.equal([8, 2]);
  });

  it('should have a calculatePercentCorrect method that calculates and returns the percentage of correct guesses', function() {
    round.takeTurn('Object.keys()');
    round.takeTurn('splice()');
    round.takeTurn('true');

    const percentCorrect = round.calculatePercentCorrect();
    expect(percentCorrect).to.equal(33.33);
  });

  it('should have an endRound method that prints the result to the console', function() {
    const consoleOutput = [];
    const originalLog = console.log;
    console.log = (message) => consoleOutput.push(message);

    round.takeTurn('Object.keys()');
    round.takeTurn('splice()');
    round.takeTurn('true');
    round.endRound();

    expect(consoleOutput).to.deep.equal(['** Round over! ** You answered 33.33% of the questions correctly!']);

    console.log = originalLog;
  });
});