const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', function() {

  it('should be a function', function() { 
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store the user\'s guess', function() {

    const turn = new Turn ('crocodile')

    expect(turn).to.have.property('userGuess', 'crocodile')
  });

  it('should be able to have different guesses', function () {

    const turn1 = new Turn ('crocodile');
    const turn2 = new Turn ('alligator');

    expect(turn1.userGuess).to.equal('crocodile');
    expect(turn2.userGuess).to.equal('alligator');
  });

  it('should store the card at play', function() {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn1 = new Turn ('object', card1);

    expect(turn1).to.have.property('currentCard', card1);
  });

  it('should be able to store different cards', function() {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn1 = new Turn ('object', card1);
    const turn2 = new Turn ('array', card2);

    expect(turn1.currentCard).to.equal(card1);
    expect(turn1.currentCard).to.be.an.instanceof(Card);
    expect(turn2.currentCard).to.equal(card2);
    expect(turn2.currentCard).to.be.an.instanceof(Card);
  });

  it('should return the user\'s guess', function() {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn1 = new Turn ('object', card1)

    expect(turn1.returnGuess()).to.equal('object')

  });

  it('should return the current card at play', function () {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn1 = new Turn ('object', card1)

    expect(turn1.returnCard()).to.equal(card1)
  });

  it('should check for the right answer', function () {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn1 = new Turn ('object', card1);

    expect(turn1.userGuess).to.equal(turn1.currentCard.correctAnswer)
    expect(turn1.evaluateGuess()).to.be.equal('Correct!');
  });

  it('should check for wrong answers', function () {

    const card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn1 = new Turn ('array', card1);

    expect(turn1.userGuess).not.to.equal(turn1.currentCard.correctAnswer)
    expect(turn1.evaluateGuess()).to.be.equal('Incorrect!');
  });
  
});



// Write test for the following methods:
//
// it should return the user's guess 
    // turn.returnGuess() use expect or assert to check if the function returns the user's guess

// it should return the current card at play 
    // turn.returnCard expect to equal the current card at play

//  it should evaluate the user's guess
    //turn.evaluateGuess should equal true if the guess is the cards correct answer
    //this will be split into two test one to check for true conditions 
    //  and a second test to check for falsey conditions

//  it should give feedback
    // An extension on the previous test to check for a respective statement to be displayed to the 
    // user depending on wether their answer is correct or not.
    // again split into two test
