const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');

const testData = data.prototypeData.slice(0, 5);

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of a Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should set first card in deck as default to start the round,' function() {
    const card1 = new Card(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);
    const card2 = new Card(testData[1].id, testData[1].question, testData[1].answers, testData[1].correctAnswer);
    const card3 = new Card(testData[2].id, testData[2].question, testData[2].answers, testData[2].correctAnswer);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.currentCard).to.equal(card1);
  });

  it('should return current card in play', function() {
    const card1 = new Card(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);
    const card2 = new Card(testData[1].id, testData[1].question, testData[1].answers, testData[1].correctAnswer);
    const card3 = new Card(testData[2].id, testData[2].question, testData[2].answers, testData[2].correctAnswer);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard).to.equal(round.currentCard);
  });

  it('should allow user to take turn', function() {
    const card1 = new Card(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);
    const card2 = new Card(testData[1].id, testData[1].question, testData[1].answers, testData[1].correctAnswer);
    const card3 = new Card(testData[2].id, testData[2].question, testData[2].answers, testData[2].correctAnswer);
    const card4 = new Card(testData[3].id, testData[3].question, testData[3].answers, testData[3].correctAnswer);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    round.takeTurn();
    round.takeTurn();

    expect(round.turnCount).to.equal(3);
    expect(round.totals).to.equal([{card: 1, guess: 'object', correct: true}, {card: 2, guess: 'array', correct: true}, {card: 3, guess: 'object', correct: false} ])
    expect(round.currentCard).to.equal(card4);
    expect(round.incorrectGuesses).to.equal([{card: 3, guess: 'object', correct: false}]);
  });

  it('should calculate percent correct', function() {
    const card1 = new Card(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);
    const card2 = new Card(testData[1].id, testData[1].question, testData[1].answers, testData[1].correctAnswer);
    const card3 = new Card(testData[2].id, testData[2].question, testData[2].answers, testData[2].correctAnswer);
    const card4 = new Card(testData[3].id, testData[3].question, testData[3].answers, testData[3].correctAnswer);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    round.takeTurn();
    round.takeTurn();

    expect(round.calculatePercentCorrect()).to.equal(`66%`);
  });

  it('should be able to end the round', function() {
    const card1 = new Card(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);
    const card2 = new Card(testData[1].id, testData[1].question, testData[1].answers, testData[1].correctAnswer);
    const card3 = new Card(testData[2].id, testData[2].question, testData[2].answers, testData[2].correctAnswer);
    const card4 = new Card(testData[3].id, testData[3].question, testData[3].answers, testData[3].correctAnswer);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    round.takeTurn();
    round.takeTurn();

    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect} of the questions correctly!`);
  });

});
