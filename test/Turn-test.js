const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {

  let card, turn, guessOutcome;
  
  beforeEach('setup', () => {
    card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi');
    turn = new Turn("guess", card);
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', () => {
    expect(turn.guess).to.equal('guess');
  });

  it('should store a card object', () => {
    expect(turn.card).to.equal(card);
  });

  it('should return the user guess', () => {
    const guess = turn.returnGuess();
    expect(guess).to.equal("guess");
  });

  it('should return the card', () => {
    const turnCard = turn.returnCard();
    expect(turnCard).to.equal(card);
  });

  it('should return true indicating if the user’s guess matches the correct answer on the card', () => {
    const turn = new Turn("Onomichi", card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false indicating if the user’s guess doesn\'t match the correct answer on the card', () => {
    const turn = new Turn("Osaka", card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should output whether the guess is correct.', () => {

    turn = new Turn("Onomichi", card);
    expect(turn.giveFeedback()).to.equal("correct!");
  });


  it('should output whether the guess is incorrect.', () => {

    turn = new Turn("Osaka", card);
    expect(turn.giveFeedback()).to.equal("incorrect!");
  });
});