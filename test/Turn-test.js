const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('Should be a function', function() {
      const card = new Card(1, 'Which is not a name of Jim O\'heir\'s character in Parks & Recreation?', ['Jerry', 'Larry', 'Terry', 'Barry'], 'Barry');
      expect(Turn).to.be.a('function');
    });

  it('Should be an instance of a turn', function() {
      const card = new Card(1, 'Which is not a name of Jim O\'heir\'s character in Parks & Recreation?', ['Jerry', 'Larry', 'Terry', 'Barry'], 'Barry');
      const turn = new Turn('guess', card);
      expect(turn).to.be.an.instanceof(Turn);
    });

  it('Should return the guess of the user', function() {
      const card = new Card(1, 'Which is not a name of Jim O\'heir\'s character in Parks & Recreation?', ['Jerry', 'Larry', 'Terry', 'Barry'], 'Barry');
      const turn = new Turn('guess', card);

      expect(turn.returnGuess()).to.equal(turn.guess);
    });

  it('Should return the Card', function() {
      const card = new Card(1, 'Which is not a name of Jim O\'heir\'s character in Parks & Recreation?', ['Jerry', 'Larry', 'Terry', 'Barry'], 'Barry');
      const turn = new Turn('guess', card);

      expect(turn.returnCard()).to.equal(card);
    });

  it('Should evaluate if the user guess is correct', function() {
      const card1 = new Card(1, 'Which is not a name of Jim O\'heir\'s character in Parks & Recreation?', ['Jerry', 'Larry', 'Terry', 'Barry'], 'Barry');
      const turn1 = new Turn('Barry', card1);

      expect(turn1.evaluateGuess()).to.equal(true);

      const card2 = new Card(1, 'Which is not a name of Jim O\'heir\'s character in Parks & Recreation?', ['Jerry', 'Larry', 'Terry', 'Barry'], 'Barry');
      const turn2 = new Turn('Terry', card2);
      expect(turn2.evaluateGuess()).to.equal(false);
    });

  it('Should give feedback on if the user guess is correct or not', function() {
      const card1 = new Card(1, 'Which is not a name of Jim O\'heir\'s character in Parks & Recreation?', ['Jerry', 'Larry', 'Terry', 'Barry'], 'Barry');
      const turn1 = new Turn('Barry', card1);

      expect(turn1.giveFeedback()).to.equal('Correct!');

      const card2 = new Card(1, 'Which is not a name of Jim O\'heir\'s character in Parks & Recreation?', ['Jerry', 'Larry', 'Terry', 'Barry'], 'Barry');
      const turn2 = new Turn('Terry', card2);

      expect(turn2.giveFeedback()).to.equal('Incorrect!');
    });
  });
