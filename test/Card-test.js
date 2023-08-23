const chai = require('chai');
const expect = chai.expect;
const { createCard, evaluateGuess, createDeck, createRound } = require('../src/card');

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
describe('evaluateGuess', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });
  it('should evaluate if a guess is correct and return correct',
    function() {
      const userGuess = "because";
      const card = {
        id: 2,
        question: "Why?",
        answers: ["because", "it's there", "IDK!"],
        correctAnswer: "because"
      };
      const guessCorrect = evaluateGuess(userGuess, card.correctAnswer);
      // const user = userGuess('object')
      // evaluateGuess(user, card);
      expect(guessCorrect).to.equal('Correct');
    });
  });

describe('deck', function() {
  it('should create a deck of cards', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  });
  it('should create a round and its properties', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = createDeck([card1, card2, card3]);
    // countCards(deck);
    expect(deck.length).to.equal(3);
  });
  it('should get the length of the deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, 0, 0, []);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.currentCard).to.equal(0);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});
  
describe('turn', function() {
  it('should increment turn', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, 0, 0, []);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.deck[0]).to.equal(card1);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});
    // const round = createRound(deck, card1, 0, []);
      