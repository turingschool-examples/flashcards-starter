const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect } = require('../src/round');

describe('round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create a deck property that holds onto the deck object', function() {

    expect(round.deck).to.deep.equal({
      cards: [{id: 1, question: 'What is Robbie\'s favorite animal', answers:['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'}, 
    {id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'},
    {id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'}]
    });
  });

  it('should start with the first in the deck', function() {

    const currentCard = deck.cards[0];

    expect(round.currentCard).to.deep.equal(currentCard);
  });

  it('should begin a default value of 0 turns', function() {

    expect(round.turns).to.equal(0);
  });

  it('should begin as an empty array and store incorrectly guessed cards during round', function() {
    
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});

describe('takeTurn', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should evaluate if guess is correct or incorrect', function() {
      const correctGuess = takeTurn('sea otter', round);
      expect(correctGuess).to.equal('Correct!');
      const incorrectGuess = takeTurn('spleen', round);
      expect(incorrectGuess).to.equal('Incorrect!');
  });

  it('should store current card ID in incorrect guesses', function() {

    takeTurn('spleen', round);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });


  it('should increment turns for each round', function() {

    takeTurn('sea otter', round);
    takeTurn('spleen', round);
    expect(round.turns).to.equal(2);
  });

  it('should confirm that the next card becomes the current card', function() {
    
    takeTurn('sea otter', round);
    takeTurn('spleen', round);
    expect(round.currentCard.id).to.equal(12);
  });
});

describe('calculatePercent', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });

  it('shoud be a function', function() {
    expect(calculatePercentCorrect).to.be.a('function');
  });

  it('should calculate and return the percentage of correct guesses', function(){
    takeTurn('sea otter', round);
    takeTurn('spleen', round);
    expect(round.percent).to.equal(50);
  });
});

