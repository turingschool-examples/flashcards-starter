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

  it('should be able to store an array of card objects', function() {
    const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
    const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
    const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    expect(deck.cards).to.be.an.instanceof(Array);
    expect(deck.cards[0]).to.be.an.instanceof(Card);
    expect(deck.cards[2]).to.equal(cardThree);
  });

  it('should be able to know how many cards are in the deck', function() {
    const cardOne = new Card(1, 'QuestionOne', ['Not', 'It', 'AnswerOne'], 'AnswerOne');
    const cardTwo = new Card(2, 'QuestionTwo', ['Not', 'It', 'AnswerTwo'], 'AnswerTwo');
    const cardThree = new Card(3, 'QuestionThree', ['Not', 'It', 'AnswerThree'], 'AnswerThree');
    const deck = new Deck([cardOne, cardTwo, cardThree]);
    expect(deck.countCards()).to.equal(3);

  });

});
