const chai = require('chai');
const expect = chai.expect;
const { createCard, evaluateGuess, createDeck, createRound, takeTurn } = require('../src/card');

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
    expect(deck.length).to.equal(3);
  });
  it('should get the length of the deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, 0, 0, []);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.currentCard).to.equal(card1);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.currentCardIndex).to.equal(0);
  });
});
  
describe('turn', function() {
  it('should increment turn', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, 0, 0, []);
    takeTurn('pug', round);
  
    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.deck[0]).to.equal(card1);
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });
});

describe('calculatePercentCorrect', function() {
  it('should calculate and return the percentage of correct guesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, 0, 0, []);
    takeTurn('pug', round);
    takeTurn('gallbladder', round);
    takeTurn('Lex', round);
    const percent = calculatePercentCorrect(round)
    // (round.deck.length) - (round.incorrectGuesses.length) = correct guesses, divide correct guesses by total guesses, * 100 = percent correct
    console.log({percent})
    expect(percent).to.equal("33");

  });
});



   
// Setup - Setup the conditions required to execute the action on your subject
// Execution - Execute some action on your subject
// Assertion - Assert that the action you did had the results you expect
