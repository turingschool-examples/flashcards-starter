const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should instantiate a turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should have a guess', function() {
    const turn = new Turn('Heat of the Moment');

    expect(turn.userGuess).to.equal('Heat of the Moment');
  });

  it('should have a card currently in play', function() {
    const card = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "My mom is part of the Audubon society");

    const turn = new Turn('Heat of the Moment', card);

    expect(turn.userGuess).to.equal('Heat of the Moment');
  });

  it('should be unsolved by default', function() {
    const card = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "My mom is part of the Audubon society");

    const turn = new Turn('Joke is on the Bird', card);

    expect(turn.solved).to.equal(false);
  });

  it('should return the guess on the current card in play', function() {
    const card = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "My mom is part of the Audubon society");

    const turn = new Turn('I Smell Like Flowers', card);
    const userGuess = turn.returnGuess();

    expect(userGuess).to.equal('I Smell Like Flowers');
  });

  it('should return the current card in play', function() {
    const card = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "My mom is part of the Audubon society");

    const turn = new Turn('Joke is on the Bird', card);
    const returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card);
  });


  it('should evaluate the user\'s guess on the current card in play', function() {
    const card = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "I Smell Like Flowers");

    const turn = new Turn('I Smell Like Flowers', card);
    const userGuess = turn.evaluateGuess();

    const nextTurn = new Turn('Joke is on the Bird', card);
    const nextUserGuess = nextTurn.evaluateGuess();

    expect(userGuess).to.equal(true);
    expect(nextUserGuess).to.equal(false);
  });

  it('should give feedback about the user\'s guess on the current card in play', function() {
    const card = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "I Smell Like Flowers");

    const turn = new Turn('I Smell Like Flowers', card);
    turn.evaluateGuess();
    const userFbk = turn.giveFeedback();

    const nextTurn = new Turn('Joke is on the Bird', card);
    nextTurn.evaluateGuess();
    const nextUserFbk = nextTurn.giveFeedback();

    expect(userFbk).to.equal('correct');
    expect(nextUserFbk).to.equal('incorrect');
  });
})
