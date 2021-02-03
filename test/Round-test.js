const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () => {

  // beforeEach(function() {
  //   const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
  //   const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
  //   const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
  //   const deck = new Deck([cardOne, cardTwo, cardThree]);
  // });

  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to store an instance of Deck', () => {
    const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
    const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
    const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    expect(round.deck.cards).to.be.deep.equal([cardOne, cardTwo, cardThree]);
  });

  it('should start with turn counter that start at 0', () => {
    const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
    const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
    const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    expect(round.turn).to.equal(0);
  });

  it('should start with a empty array for incorrect guesses', () => {
    const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
    const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
    const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.be.an.instanceof(Array);
  });

  it('should be able to return the current card for the deck', () => {
    const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
    const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
    const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(cardOne);
  });

  describe('Round.takeTurn()', () => {

    it.skip('should create a new turn instance when guess is made', () => {

    });

    it.skip('should add one to the turn counter', () => {
      const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
      const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
      const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
      const deck = new Deck([cardOne, cardTwo, cardThree]);
      const round = new Round(deck);
      round.takeTurn();
      expect(round.turn).to.equal(1);
    });

    it.skip('should be able to count multiple turns', () => {
      const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
      const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
      const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
      const deck = new Deck([cardOne, cardTwo, cardThree]);
      const round = new Round(deck);
      round.takeTurn();
      round.takeTurn();
      round.takeTurn();
      expect(round.turn).to.equal(3);
    });

    it.skip('should update the current card to the next card in the deck', () => {
      const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
      const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
      const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
      const deck = new Deck([cardOne, cardTwo, cardThree]);
      const round = new Round(deck);
      round.takeTurn();
      expect(round.returnCurrentCard()).to.equal(cardTwo);
    });

    it.skip('Should check the guesses and store incorrect card id in the incorrectGuesses array', () => {
      const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
      const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
      const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
      const deck = new Deck([cardOne, cardTwo, cardThree]);
      const round = new Round(deck);
      round.takeTurn();
      expect(round.incorrectGuesses).to.equal(cardOne);
    });

    it.skip('should return feedback if guess is correct', () => {
      const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
      const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
      const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
      const deck = new Deck([cardOne, cardTwo, cardThree]);
      const round = new Round(deck);
      expect(round.taketurn()).to.equal('correct!');
    });

    it.skip('should returnfeedback if guess is incorrect', () => {
      const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
      const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
      const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
      const deck = new Deck([cardOne, cardTwo, cardThree]);
      const round = new Round(deck);
      expect(round.taketurn()).to.equal('incorrect!');
    });
    
  });

  it.skip('should be able to return the percentage of correct guesses', () => {
    const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
    const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
    const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    const round = new Round(deck);
    round.taketurn();
    round.taketurn();
    round.taketurn();
    expect(round.calculatePercentCorrect).to.equal();
  });


    it.skip('should log ** Round over! **and give the % correct at the end of the round', () => {
      const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
      const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
      const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
      const deck = new Deck([cardOne, cardTwo, cardThree]);
      const round = new Round(deck);
      round.taketurn();
      round.taketurn();
      round.taketurn();
      expect(round.endRound).to.equal('** Round over! ** You answered 33% of the questions correctly!')
    });
});
