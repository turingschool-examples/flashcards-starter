const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, giveFeedback, calculatePercentCorrect, } = require('../src/card');

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

describe('guess', function() {
  it('should evaluate if a guess is correct and return correct', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'object';
    let guessResult = evaluateGuess(guess, card);
    expect(guessResult).to.equal('correct');
  });

  it('should evaluate if a guess is incorrect and return incorrect', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'array' || 'function';
    let guessResult = evaluateGuess(guess, card);
    expect(guessResult).to.equal('incorrect');
  });
});

describe('deck', function() {
  it('should create a deck of cards', function() {
  const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'); 
  const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  
  const deck = createDeck([card1, card2, card3]);

  expect(deck).to.deep.equal([card1, card2, card3]);
  });

  it('should get the length of the deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'); 
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = createDeck([card1, card2, card3]);
    countCards(deck);
    expect(deck.length).to.equal(3);
  });
});

describe('round', function() {
  it('should create a round and its properties', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'); 
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, 0, 0, []);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.currentCardIndex).to.equal(0);
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
    
    const guess = 'sea otter';
    takeTurn(guess, round);

    expect(round.turns).to.equal(1);
  });

  it('should store id of incorrect guess', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'); 
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, 0, 0, []);   
    
    const guess = 'pug';
    takeTurn(guess, round);

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });
  
  it('should move to the next card after each guess', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'); 
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, 0, 0, []);   
    
    const guess = 'pug';
    // console.log(round.currentCard)
    takeTurn(guess, round);
    // console.log(round.currentCard)
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([1]);
    expect(round.currentCardIndex).to.equal(1);

    takeTurn(guess, round);
    // console.log(round.currentCard)
    expect(round.currentCardIndex).to.equal(2);
    expect(round.currentCardIndex).to.equal(2);
  });

  it('should give feedback for correct guess', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');  
    const deck = createDeck([card1]);
    const round = createRound(deck, 0, 0, []);   
    const guess = 'sea otter';

    const correctFeedback = giveFeedback(guess, 'correct')
    const result = takeTurn(guess, round);

    expect(result).to.equal(correctFeedback);
  });

  it('should give feedback for incorrect guess', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');  
    const deck = createDeck([card1]);
    const round = createRound(deck, 0, 0, []);   
    const guess = 'pug';

    const correctFeedback = giveFeedback(guess, 'incorrect')
    const result = takeTurn(guess, round);

    expect(result).to.equal(correctFeedback);
  });

  it('should return the percentage of correct guesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'); 
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, 0, 0, []);  

    let guess = 'capybara';
    takeTurn(guess, round);
    guess = 'spleen';
    takeTurn(guess, round);
    guess = 'Fitzgerald'
    takeTurn(guess, round);

    const correctPercentage = calculatePercentCorrect(round);
    // console.log(correctPercentage)
    expect(correctPercentage).to.equal(33)
  });
});