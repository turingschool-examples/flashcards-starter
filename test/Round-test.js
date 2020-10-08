const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let turn;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'You live in a one story house made entirely of redwood. What color would the stairs be?', ['wood', 'red', 'What stairs? You live in a one-story house'], 'What stairs? You live in a one-story house');
    card2 = new Card(2, 'I am not alive, but I grow; I don\'t have lungs, but I need air; I don\'t have a mouth, but water kills me. What am I?', ['ice', 'fire', 'pants'], 'fire');
    card3 = new Card(3, 'What belongs to you, but other people use it more than you?', ['your name', 'your money', 'your internet'], 'your name');
    turn = new Turn('red', card1);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take a deck of cards as an argument', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should have incorrect guesses stored to empty array by default', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should have number of turns set to 0 by default', () => {
    expect(round.turns).to.equal(0);
  });

  it('should return the current card being played', () => {
    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should update number of turns when user takes a turn', () => {

    expect(round.turns).to.equal(0);
    round.takeTurn('red');

    expect(round.turns).to.equal(1);
    round.takeTurn('fire');

    expect(round.turns).to.equal(2);
    round.takeTurn('your name');
  });

  it('should update current card with next card in set after user takes a turn', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);

    round.takeTurn('red');
    round.takeTurn('fire');

    expect(round.returnCurrentCard()).to.deep.equal(card3);
    round.takeTurn('your name');
  });

  it('should give feedback on correctness of user\'s guess', () => {

    round.takeTurn('red');

    expect(round.takeTurn('red')).to.equal('incorrect!');

  });
  it.skip('should give feedback on correctness of user\'s guess', () => {

    round.takeTurn('What stairs? You live in a one-story house');

    expect(round.takeTurn(turn.giveFeedback)).to.not.equal('incorrect!');

  });

  it('should store id of incorrect guesses', () => {
    round.takeTurn('red');
    expect(round.incorrectGuesses[0]).to.deep.equal(card1.id)

    round.takeTurn('fire');
    expect(round.incorrectGuesses[0]).to.deep.equal(card1.id)
  });

  it('should calculate percent of correct guesses', () => {
    round.takeTurn('red');
    round.takeTurn('fire');
    round.takeTurn('your name');

    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should print a message to show that the round is over', () => {
    round.takeTurn('red');
    round.takeTurn('fire');
    round.takeTurn('your name');

    round.endRound();

    expect(round.endRound()).to.equal('**Round over!** You answered 66% of the questions correctly!');
  });
});
