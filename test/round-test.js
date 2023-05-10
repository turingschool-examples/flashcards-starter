// ROUND, CARD, AND DECK TESTS //

const chai = require('chai');
const expect = chai.expect;
const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { dataSub } = require('../src/dataSub');

describe('createCard', () => {
  it('should be a function', () => {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('evaluateGuess', () => {
  it("should return 'correct!' if the guess is correct", () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const userGuess = 'object';
    const turn = evaluateGuess(userGuess, card);
    expect(turn).to.equal('correct!');
  });

  it("should return 'incorrect!' if the guess is incorrect", () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const userGuess = 'array';
    const turn = evaluateGuess(userGuess, card);
    expect(turn).to.equal('incorrect!');
  });
});

describe('deck', () => {
  it('should create a deck of cards', () => {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    const deckNum = countCards(deck);
    expect(deckNum).to.equal(3);
  });

  it('should work with different size decks', () => {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = createDeck([card1]);
    const deckNum = countCards(deck);
    expect(deckNum).to.equal(1);
  });
});

describe('round', () => {
  let card1, card2, card3, deck, round;
  
  beforeEach(() => {
    card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });

  it('should return an object with a deck property', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });
  
  it('should return a currentCard property that is the first card in the deck', () => {
    expect(round.currentCard.id).to.equal(card1.id);
  });
  
  it('should return a turns property that starts as 0', () => {
    expect(round.turns).to.equal(0);
  });
  
  it('should return an incorrectGuesses property', () => {    
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});

describe('takeTurn', () => {
  let card1, card2, card3, deck, round;
  
  beforeEach(() => {
    card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });

  it('should update the turn count', () => {
    let userGuess = 'object';    
    takeTurn(userGuess, round);
    expect(round.turns).to.equal(1);
    takeTurn(userGuess, round);
    expect(round.turns).to.equal(2);
  });

  it('should update the current card', () => {    
    let userGuess = 'object';
    takeTurn(userGuess, round);
    expect(round.currentCard.id).to.equal(card2.id);
  });

  it('should evaluate the guess and store incorrect guesses in the incorrectGuesses array', () => {
    let userGuess = 'array';   
    takeTurn(userGuess, round);
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses[0]).to.equal(1);
    userGuess = 'spleen';
    takeTurn(userGuess, round)
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.incorrectGuesses[1]).to.equal(14);
  });

  it('should not add the guess to the incorrectGuesses array if it is correct', () => {
    let userGuess = 'object'; 
    takeTurn(userGuess, round);
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should return feedback if guess is correct', () => {
    let userGuess = 'object'; 
    const feedback = takeTurn(userGuess, round)
    expect(feedback).to.equal('correct!');
  });

  it('should return feedback if guess is incorrect', () => {
    let userGuess = 'array'; 
    const feedback = takeTurn(userGuess, round)
    expect(feedback).to.equal('incorrect!');
  });

  it('should calculate and return the percentage of correct guesses', () => {
    userGuess = 'object';
    takeTurn(userGuess, round);
    userGuess = 'spleen';
    takeTurn(userGuess, round);
    const percentCorrect = calculatePercentCorrect(round);
    expect(percentCorrect).to.equal('50%');
  });

  it('should return 100% if there are 0 incorrect guesses', () => {
    userGuess = 'object';
    takeTurn(userGuess, round);
    let percentCorrect = calculatePercentCorrect(round);
    expect(percentCorrect).to.equal('100%');
    userGuess = 'gallbladder';
    takeTurn(userGuess, round);
    percentCorrect = calculatePercentCorrect(round);
    expect(percentCorrect).to.equal('100%');
  });

  it('should print a message to the console', () => {
    userGuess = 'object';
    takeTurn(userGuess, round);
    endRound(round);
    expect(round.consoleLogMessage).to.equal(`** Round over! ** You answered 100% of the questions correctly!`);
    userGuess = 'spleen';
    takeTurn(userGuess, round);
    endRound(round);
    expect(round.consoleLogMessage).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });
});
