const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, createRound } = require('../src/card');

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
});

describe('deck', function(){
  it('should be an array of cards', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck(card1, card2);

    expect(deck).to.be.an('array');
    expect(deck).to.deep.equal([card1, card2])
  })

  it('should take any number of cards', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array");
    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const card4 = createCard(4, "Which member of the Justice League was at one point kicked out", ['Flash', 'Martian Manhunter', 'Hawkgirl'], 'Hawkgirl');
    const card5 = createCard(5, "In the Justice League animated series, which hero switches bodies with Lex Luthor", ["Superman", "Flash", "Batman"], "Flash");

    const deck = createDeck(card1, card2, card3, card4, card5);

    expect(deck.length).to.equal(5);
  })

  it('should know how many cards are in the deck', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck(card1, card2);

    const numberOfCards = countCards(deck);

    expect(numberOfCards).to.equal(2);
  })
})

describe('round', function() {
  it('should be an function', function() {
    expect(createRound).to.be.an('function');
  })

  it('should return a round and its properties', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck(card1, card2);

    const round = createRound(deck);

    expect(round).to.be.an('object');
    expect(round.deck).to.deep.equal(deck);
    expect(round.currentCard).to.deep.equal(card1);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  })

  it('should return a round with all of its methods', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck(card1, card2);

    const round = createRound(deck);

    expect(round.takeTurn).to.be.a('function');
    expect(round.calculatePercentageCorrect).to.be.a('function');
    expect(round.endRound).to.be.a('function');
  })
})

describe('turn', function() {
  it('should update the turn count regardless of the result of the guess', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck(card1, card2);
    const round = createRound(deck);
    const correctGuess = 'object';
    const incorrectGuess = 'array';

    round.takeTurn(correctGuess, round);
    round.takeTurn(incorrectGuess, round);

    expect(round.turns).to.equal(2);
  })
  
  it('should update the currentCard to the next card', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")

    const deck = createDeck(card1, card2);
    const round = createRound(deck);

    round.takeTurn('object', round);

    expect(round.currentCard).to.deep.equal(card2);
  })

  it('should determine whether the guess is correct or not', function() {
    const correctResult = evaluateGuess('object', 'object');
    const incorrectResult = evaluateGuess('object', 'array');

    expect(correctResult).to.equal('correct!');
    expect(incorrectResult).to.equal('incorrect!');
  })
})