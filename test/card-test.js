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

describe('deck', function() {
  it.skip('should create a deck with the correct number of cards', function() {
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

  it.skip('should know how many cards are in the deck', function() {
    const deck = createDeck(prototypeData);
    const numCards = countCards(deck);
    expect(numCards).to.equal(prototypeData.length);
  });
}); 

describe('createRound', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should initialize a round with a deck and necessary properties', function() {
    const mockDeck = [{id: 1, question: 'sample question?', correctAnswer: 'answer'}]; // mock deck for testing
    const round = createRound(mockDeck);
    
    expect(round.deck).to.deep.equal(mockDeck);
    expect(round.currentCard).to.deep.equal(mockDeck[0]);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should process a correct guess correctly', function() {
    global.evaluateGuess = (guess, correctAnswer) => guess === correctAnswer ? 'correct!' : 'incorrect!';
    const mockDeck = [{id: 1, question: 'sample question?', correctAnswer: 'answer'}];
    const round = createRound(mockDeck);

    const result = round.takeTurn('answer'); // correct
    expect(result).to.equal('correct!');
    expect(round.incorrectGuesses.length).to.equal(0);
    expect(round.currentCard).to.be.undefined; // because there's only one card in this mock deck
  });

  it('should process an incorrect guess correctly', function() {
    global.evaluateGuess = (guess, correctAnswer) => guess === correctAnswer ? 'correct!' : 'incorrect!';
    const mockDeck = [{id: 1, question: 'sample question?', correctAnswer: 'answer'}];
    const round = createRound(mockDeck);

    const result = round.takeTurn('wrong answer'); // Incorrect
    expect(result).to.equal('incorrect!');
    expect(round.incorrectGuesses).to.include(1);
  });

  it('should calculate percent correct accurately', function() {
    const mockDeck = [
      {id: 1, question: 'question1?', correctAnswer: 'answer1'},
      {id: 2, question: 'question2?', correctAnswer: 'answer2'}
    ];
    const round = createRound(mockDeck);

    round.takeTurn('wrong answer'); // Incorrect 
    round.takeTurn('answer2'); // correct
    const percentCorrect = round.calculatePercentCorrect();

    expect(percentCorrect).to.equal(50); // 1 out of 2 correct
  });
});
