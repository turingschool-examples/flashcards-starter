const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn;
  let card;

  beforeEach(() => {
    card = new Card(1, 'You live in a one story house made entirely of redwood. What color would the stairs be?', ['wood', 'red', 'What stairs? You live in a one-story house'], 'What stairs? You live in a one-story house');
    turn = new Turn('red', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', function() {
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('red');
  });

  it('should store the current card in play', function() {
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return the user\'s guess', function() {
    expect(turn.returnGuess()).to.equal('red');
  });

  it('should return the card in play', function() {
    expect(turn.returnCard()).to.be.an.instanceof(Card);
    expect(turn.returnCard().correctAnswer).to.deep.equal(turn.card.correctAnswer);
  });

  it('should evaluate if user\'s guess is correct', function() {

    let card1 = new Card(1, 'You live in a one story house made entirely of redwood. What color would the stairs be?', ['wood', 'red', 'What stairs? You live in a one-story house'], 'What stairs? You live in a one-story house');

    let turn1 = new Turn('red', card1);

    turn1.evaluateGuess();

    let card2 = new Card(2, 'I am not alive, but I grow; I don\'t have lungs, but I need air; I don\'t have a mouth, but water kills me. What am I?', ['ice', 'fire', 'pants'], 'fire');

    let turn2 = new Turn('fire', card2);

    turn2.evaluateGuess();

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should give feedback for correct or incorrect answers', function() {
    let card1 = new Card(1, 'You live in a one story house made entirely of redwood. What color would the stairs be?', ['wood', 'red', 'What stairs? You live in a one-story house'], 'What stairs? You live in a one-story house');

    let turn1 = new Turn('red', card1);

    turn1.evaluateGuess();
    turn1.giveFeedback();

    let card2 = new Card(2, 'I am not alive, but I grow; I don\'t have lungs, but I need air; I don\'t have a mouth, but water kills me. What am I?', ['ice', 'fire', 'pants'], 'fire');

    let turn2 = new Turn('fire', card2);

    turn2.evaluateGuess();
    turn2.giveFeedback();

    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});
