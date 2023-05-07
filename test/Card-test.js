const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');
const { prototypeData } = require('../src/data');

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

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate if a guess is correct or incorrect', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const correctGuess = evaluateGuess('object', card);
    const incorrectGuess = evaluateGuess('array', card);

    expect(correctGuess).to.deep.equal('correct!');
    expect(incorrectGuess).to.deep.equal('incorrect!');
  });

  describe('deck', function() {
    it.skip('should create a deck of cards', function() {
      const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = createDeck([card1, card2, card3]);

      expect(deck.cards[0]).to.deep.equal(card1);
      expect(deck.cards[1]).to.deep.equal(card2);
      expect(deck.cards[2]).to.deep.equal(card3);
      expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it.skip('should know how many cards are in the deck', function() {
      const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck1 = createDeck([card1, card2, card3]);
      const deck2 = createDeck(prototypeData);
      const count1 = countCards(deck1);
      const count2 = countCards(deck2);

      expect(count1).to.deep.equal(3);
      expect(count2).to.deep.equal(30);
    });
  });
});