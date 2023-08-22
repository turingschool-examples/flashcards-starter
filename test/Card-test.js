const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');

describe('card', function() {
  it.skip('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it.skip('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  

describe('guess', function() {
  // evaluate guess, see if it matches with answer
  // return incorrect or correct
  it('should take in a guess', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    // const guessCorrect = evaluateGuess(card, 'object');
    const user = userGuess('object')
    evaluateGuess(user, card);
    
    expect(user.guess).to.equal('object');
  });
});

describe('deck', function() {
  it('should create a deck of cards', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    it('should create a round and its properties', function() {
      const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

      const deck = createDeck([card1, card2, card3]);
      const round = createRound(deck, card1, 0, []);
   
      expect(round.deck).to.deep.equal([card1, card2, card3]);
      expect(round.currentCard).to.equal(card1);
      expect(round.turns).to.equal(0);
      expect(round.incorrectGuesses).to.deep.equal([]);
})
});