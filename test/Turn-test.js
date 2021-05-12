const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Data = require('../src/data');

describe('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', () => {
    const turn = new Turn("guess");
    expect(turn.guess).to.equal('guess');
  });

  it('should store a card object', () => {
    
    const card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi')
    const turn = new Turn("guess", card);
    expect(turn.card).to.equal(card);
  });

  it('should return the user guess', () => {
    const card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi')
    const turn = new Turn("guess", card);

    const guess = turn.returnGuess();
    expect(guess).to.equal("guess");
  });

  it('should return the card', () => {
    const card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi')
    const turn = new Turn("guess", card);

    const turnCard = turn.returnCard();
    expect(turnCard).to.equal(card);
  });

  it('should return true indicating if the user’s guess matches the correct answer on the card', () => {
    const card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi')
    const turn = new Turn("Onomichi", card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false indicating if the user’s guess doesn\'t match the correct answer on the card', () => {
    const card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi')
    const turn = new Turn("Osaka", card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should output whether the guess is correct.', () => {
    const card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi')
    const turn = new Turn("Onomichi", card);
    const guessOutcome = turn.evaluateGuess();

    expect(turn.giveFeedback(guessOutcome)).to.equal("correct!");
  });


  it('should output whether the guess is incorrect.', () => {
    const card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi')
    const turn = new Turn("Osaka", card);
    const guessOutcome = turn.evaluateGuess();

    expect(turn.giveFeedback(guessOutcome)).to.equal("incorrect!");
  });
});