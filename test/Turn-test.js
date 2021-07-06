const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('Should be a function', function() {
      const card = new Card();
      expect(Turn).to.be.a('function');
    });

  it('Should be an instance of a turn', function() {
      const card = new Card();
      const turn = new Turn("guess", card);
      expect(turn).to.be.an.instanceof(Turn);
    });

  it('Should return the guess of the user', function() {
      const card = new Card();
      const turn = new Turn("guess", card);

      expect(turn.returnGuess()).to.equal(turn.guess);
    });

  it('Should return the Card', function() {
      const card = new Card();
      const turn = new Turn("guess", card);

      expect(turn.returnCard()).to.equal(card);
    });
    // evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card

  it('Should evaluate if the user guess is correct', function() {
      const card1 = new Card();
      const turn1 = new Turn("guess", card);

      expect(turn.evaluateGuess()).to.equal(true);

      const card2 = new Card();
      const turn2 = new Turn("incorrect guess", card);
      expect(turn.evaluateGuess()).to.equal(false);
    });
    // giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
  it('Should give feedback on if the user guess is correct or not', function() {
      const card1 = new Card();
      const turn1 = new Turn("guess", card);

      expect(turn.giveFeedback()).to.equal('correct!');

      const card2 = new Card();
      const turn2 = new Turn("incorrect guess", card);

      expect(turn.giveFeedback()).to.equal('incorrect!');
    });
  });
