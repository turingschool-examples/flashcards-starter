const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () => {
  let cardOne;
  let cardTwo;
  let cardThree;
  let deck;

  beforeEach(function() {
    cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
    cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
    cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
    deck = new Deck([cardOne, cardTwo, cardThree]);
  });

  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to store an instance of Deck', () => {
    const round = new Round(deck);
    expect(round.deck.cards).to.be.deep.equal([cardOne, cardTwo, cardThree]);
  });

  it('should start with turn counter that start at 0', () => {
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
  });

  it('should start with a empty array for incorrect guesses', () => {
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.be.an.instanceof(Array);
  });

  it('should be able to return the current card for the deck', () => {
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.deep.equal(cardOne);
  });

  describe('Round.takeTurn()', () => {

    // it('should create a new turn instance when guess is made', () => {
    //   const round = new Round(deck);
    //   expect(round.takeTurn('guess')).to.be.an.instanceof(Turn);
    // });

    it('should add one to the turn counter', () => {
      const round = new Round(deck);
      round.takeTurn();
      expect(round.turns).to.equal(1);
    });

    it('should be able to count multiple turns', () => {
      const round = new Round(deck);
      round.takeTurn('guess');
      round.takeTurn('guess');
      round.takeTurn('guess');
      expect(round.turns).to.equal(3);
    });

    it('should update the current card to the next card in the deck', () => {
      const round = new Round(deck);
      round.takeTurn('guess');
      expect(round.returnCurrentCard()).to.equal(cardTwo);
    });

    it('Should check the guesses and store incorrect card id in the incorrectGuesses array', () => {
      const round = new Round(deck);
      round.takeTurn('guess');
      expect(round.incorrectGuesses[0]).to.equal(1);
    });

    it('should return feedback if guess is correct', () => {
      const round = new Round(deck);
      expect(round.takeTurn('AnswerOne')).to.equal('correct!');
    });

    it('should returnfeedback if guess is incorrect', () => {
      const round = new Round(deck);
      expect(round.takeTurn('AnswerTwo')).to.equal('incorrect!');
    });

  });

  it('should be able to return the percentage of correct guesses', () => {
    const round = new Round(deck);
    round.takeTurn('AnswerOne');
    round.takeTurn('AnswerOne');
    round.takeTurn('AnswerOne');
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should log ** Round over! **and give the % correct at the end of the round', () => {
    const round = new Round(deck);
    round.takeTurn('AnswerOne');
    round.takeTurn('AnswerTwo');
    round.takeTurn('AnswerOne');
    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
  });
});
