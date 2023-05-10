const chai = require('chai')
const expect = chai.expect

const {createDeck, totalCards} = require('../src/deck')
const { createCard } = require('../src/card')

describe('createDeck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function')
  });
  
  it('should create an array containing all the cards', function() {
    const card1 = createCard(1, 'What animal Sulton has now?', ['dog', 'ball python', 'gecko lizard'], 'dog');
    const card2 = createCard(14, 'What country Mehron is visiting now?', ['Russia', 'Ukraine', 'Tajikistan'], 'Tajikistan');
    const card3 = createCard(12, 'What is Sulton\'s middle name?', ['Mehron', 'Ali', 'Romin'], 'Romin');
    const deck = createDeck([card1, card2, card3]);
    expect(deck).to.be.deep.equal([card1, card2, card3]);
  });

});

describe('totalCards', function() {
  it('should be a function', function() {
    expect(totalCards).to.be.a('function')
  });
  
  it('should know how many cards are in the deck', function() {
    const card1 = createCard(1, 'What animal Sulton has now?', ['dog', 'ball python', 'gecko lizard'], 'dog');
    const card2 = createCard(14, 'What country Mehron is visiting now?', ['Russia', 'Ukraine', 'Tajikistan'], 'Tajikistan');
    const card3 = createCard(12, 'What is Sulton\'s middle name?', ['Mehron', 'Ali', 'Romin'], 'Romin');
    const deck = createDeck([card1, card2, card3]);
    const numberOfCards = totalCards(deck);
    expect(numberOfCards).to.be.equal(3);
  });
});