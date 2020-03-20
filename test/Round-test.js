const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Round = require('../src/Round');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', function () {


  let deck;
  let round;

  beforeEach(function () {
    deck = new Deck(prototypeQuestions)
    round = new Round(deck)
  })


  it('Should return the Deck of Cards', function () {

    expect(round.deck).to.deep.equal(deck.deck)

  });

  it('Should return the first Card in the Deck', function () {


    expect(round.returnCurrentCard()).to.equal(deck.deck[0])

  });

  it('Should keep track of turns', function () {

    round.takeTurn()
    round.takeTurn()

    expect(round.turns).to.equal(2)

  });

  it('Should have a new current Card', function () {

    round.takeTurn()

    expect(round.returnCurrentCard()).to.equal(deck.deck[1])

  });

  it('Should store the id of the card if the guess does not match', function () {

    round.takeTurn("pam")

    expect(round.incorrectGuesses).to.deep.equal([deck.deck[0].id])
  });

  it('Should return feedback if guess is correct or incorrect', function () {

    expect(round.takeTurn('pam')).to.equal("incorrect!")

    expect(round.takeTurn('array')).to.equal("correct! You got it!")

  });

  it('Should calculate % of correct guesses', function () {

    expect(round.takeTurn('pam')).to.equal("incorrect!")

    expect(round.takeTurn('array')).to.equal("correct! You got it!")

    expect(round.takeTurn("mutator method")).to.equal("correct! You got it!")

    expect(round.calculatePercentCorrect()).to.deep.equal(66)

  });

  it('Should end the round with letting you know your guess %', function () {

    expect(round.takeTurn('pam')).to.equal("incorrect!")

    expect(round.takeTurn('array')).to.equal("correct! You got it!")

    expect(round.takeTurn('will')).to.equal("incorrect!")

    expect(round.endRound()).to.equal("**Round over!** You answered 33% of the questions correctly!")

  });
});