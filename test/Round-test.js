const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  var card1;
  var card2;
  var card3;
  var deck;
  var round;

  beforeEach( () => {
    card1 = new Card ({
      "id": 1,
      "question": `A score of one better than par on a golf hole is called what?`,
      "answers": ['birdie', 'bogey', 'eagle'],
      "correctAnswer": 'birdie'
    });
    card2 = new Card ({
      "id": 2,
      "question": `What is my favorite color?`,
      "answers": ['green', 'blue', 'orange'],
      "correctAnswer": 'green'
    });
    card3 = new Card ({
      "id": 3,
      "question": `How many toes do I have on my right foot?`,
      "answers": [6, 5, 10],
      "correctAnswer": 5
    });

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be instantiated with a Deck', function() {
    expect(round.deck).to.equal(deck);
  });

  it('deck.currentCard should represent the first card being played', function() {
    expect(round.currentCard).to.equal(card1);
  });

  it('should have a returnCurrentCard method', function() {
    expect(round.returnCurrentCard).to.be.a('function');
  });

  it('round.returnCurrentCard() should return the card being played', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should have a takeTurn method', function() {
    expect(round.takeTurn).to.be.a('function');
  });

  it.skip('round.takeTurn() should create a new instance of Turn', function() {
    // expect(round.takeTurn('bogey')).to.equal('incorrect!');
    // expect(round.takeTurn('green')).to.equal('correct!');
  })

  it('round.takeTurn() should increase round.turns each time it is called', function() {
    expect(round.takeTurn()).to.deep.equal(1);
  });

})
