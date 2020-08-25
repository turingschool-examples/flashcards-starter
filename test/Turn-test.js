const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    
    const turn = new Turn();
    
    expect(turn).to.be.an.instanceof(Turn);

  }); 

  it('should store a guess', function() {
    
    const card = new Card(1, "Guess who?", ["Chris", "Jeff"], "Chris")

    const turn = new Turn("Chris", 1);

    expect(turn.guess).to.equal('Chris');
  });  

  it('should store a card', function() {
    
    const card = new Card(1, "Guess who?", ["Chris", "Jeff"], "Chris")

    const turn = new Turn("Chris", 1);

    expect(turn.card).to.equal(1);
  });  

  it('should be able to return the guess', function() {
    const card = new Card(1, "Guess who?", ["Chris", "Jeff"], "Chris")

    const turn = new Turn("Chris", 1);

    expect(turn.returnGuess()).to.equal("Chris")
  });

  it('should be able to return the card', function() {
    const card = new Card(1, "Guess who?", ["Chris", "Jeff"], "Chris")

    const turn = new Turn("Chris", card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to determine if the guess was correct or not', function() {
    const card = new Card(1, "Guess who?", ["Chris", "Jeff"], "Chris")

    const turn = new Turn("Chris", card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to tell the user if they guessed correctly', function() {
    const card = new Card(1, "Guess who?", ["Chris", "Jeff"], "Chris")

    const turn = new Turn("Chris", card);

    expect(turn.giveFeedback()).to.equal("correct!");
  });
});