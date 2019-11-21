const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

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

  it('round.takeTurn() should create a new instance of Turn', function() {
    expect(round.takeTurn('bogey')).to.equal('incorrect!');
    expect(round.takeTurn('green')).to.equal('correct!');
  })

  it('round.takeTurn() should increase round.turns each time it is called', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.turns).to.equal(1);
    round.takeTurn();
    expect(round.turns).to.equal(2);
  });

  it('round.takeTurn() should change the current card to the next one in the deck', function() {
    expect(round.currentCard).to.equal(card1);
    round.takeTurn();
    expect(round.currentCard).to.equal(card2);
    round.takeTurn();
    expect(round.currentCard).to.equal(card3);
  });

  it('round.takeTurn() should push the id of incorrect guesses into an array', function() {
    round.takeTurn('birdie');
    expect(round.incorrectGuesses).to.deep.equal([])

    round.takeTurn('blue');
    expect(round.incorrectGuesses).to.deep.equal([2])

    round.takeTurn('blue');
    expect(round.incorrectGuesses).to.deep.equal([2, 3])
  });

  it('round.takeTurn() should return feedback to the user based on their guess', function() {
    expect(round.takeTurn('bogey')).to.equal('incorrect!');
    expect(round.takeTurn('green')).to.equal('correct!');
    expect(round.takeTurn(5)).to.equal('correct!');
  });

  it('should have a calculatePercentCorrect method', function() {
      expect(round.calculatePercentCorrect).to.be.a('function');
  });

  it('round.calculatePercentCorrect() should return the % of correct guesses', function() {
    round.takeTurn('birdie');
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('blue');
    expect(round.calculatePercentCorrect()).to.equal(50)
    round.takeTurn('7');
    expect(round.calculatePercentCorrect()).to.equal(33)
  });

  it('should have a endRound method', function() {
      expect(round.endRound).to.be.a('function');
  });

  it('round.endRound() should print the correct message', function() {
      round.takeTurn('birdie');
      expect(round.endRound()).to.equal(`** Round Over!! ** You answered 100% of the questions correctly.`);

      round.takeTurn('red');
      expect(round.endRound()).to.equal(`** Round Over!! ** You answered 50% of the questions correctly.`);

      round.takeTurn(7);
      expect(round.endRound()).to.equal(`** Round Over!! ** You answered 33% of the questions correctly.`);
  });

})
