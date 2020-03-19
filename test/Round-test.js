const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', function () {


  let deck;
  let round;

  beforeEach(function () {

    deck = prototypeQuestions
    round = new Round(deck)
  })


  it('Should return the Deck of Cards', function () {

    expect(round.deck).to.deep.equal(deck)

  });

  it('Should return the first Card in the Deck', function () {

    expect(round.returnCurrentCard()).to.deep.equal(deck[0])

  });

  it('Should keep track of turns', function () {

    round.takeTurn()
    round.takeTurn()

    expect(round.turns).to.equal(2)

  });

  it('Should have a new current Card', function () {

    round.takeTurn("pug")

    expect(round.returnCurrentCard()).to.equal(deck[1])

  });

  it('Should store the id of the card when the guess doe not match', function () {

    round.takeTurn("pam")

    expect(round.incorrectGuesses).to.deep.equal([deck[0].id])
  });

  it('Should return feedback if guess is correct or incorrect', function () {

    expect(round.takeTurn('pam')).to.equal("incorrect!")

    expect(round.takeTurn('array')).to.equal("You got it!")

  });

  it('Should calculate % of correct guesses', function () {

    expect(round.takeTurn('pam')).to.equal("incorrect!")

    expect(round.takeTurn('array')).to.equal("You got it!")

    expect(round.takeTurn("mutator method")).to.equal("You got it!")

    expect(round.calculatePercentCorrect()).to.deep.equal(33)

  });

  it('Should end the round with letting you know your guess %', function () {

    expect(round.takeTurn('pam')).to.equal("incorrect!")

    expect(round.takeTurn('array')).to.equal("You got it!")

    expect(round.takeTurn('will')).to.equal("incorrect!")

    expect(round.endRound()).to.deep.equal("**Round over!** You answered 66 of the questions correctly!")

  });
});