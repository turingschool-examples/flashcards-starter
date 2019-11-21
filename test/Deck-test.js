const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be initialized with an array of Cards', function() {
    let card1 = {
      "id": 1,
      "question": `A score of one better than par on a golf hole is called what?`,
      "answers": ['birdie', 'bogey', 'eagle'],
      "correctAnswer": 'birdie'
    };
    let card2 = {
      "id": 2,
      "question": `What is my favorite color?`,
      "answers": ['green', 'blue', 'orange'],
      "correctAnswer": 'green'
    };
    let card3 = {
      "id": 3,
      "question": `How many toes do I have on my right foot?`,
      "answers": [6, 5, 10],
      "correctAnswer": 5
    };
    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards[0]).to.equal(card1);
    expect(deck.cards[1]).to.equal(card2);
    expect(deck.cards[2]).to.equal(card3);

  });

  it('should have a countCards method', function() {
    const deck = new Deck();
    expect(deck.countCards).to.be.a('function');
  });

  it('deck.countCards() should return the number of cards in the deck', function() {
    let card1 = {
      "id": 1,
      "question": `A score of one better than par on a golf hole is called what?`,
      "answers": ['birdie', 'bogey', 'eagle'],
      "correctAnswer": 'birdie'
    };
    let card2 = {
      "id": 2,
      "question": `What is my favorite color?`,
      "answers": ['green', 'blue', 'orange'],
      "correctAnswer": 'green'
    };
    let card3 = {
      "id": 3,
      "question": `How many toes do I have on my right foot?`,
      "answers": [6, 5, 10],
      "correctAnswer": 5
    };
    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3);
  });

});
