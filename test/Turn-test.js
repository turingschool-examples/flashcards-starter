const chai = require('chai');
const expect = chai.expect;


const Card = require('../src/Card');
const Turn = require("/Users/gusderibeaux/projects/flashcards-project/src/Turn");

describe('Turn', function() {

    it('should be a function', function(){
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });
// Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.
    it('should have two arguments of a user guess and A card object in play', function(){
        const questionCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
          const turn = new Turn('object', questionCard)
      
        expect(turn.myGuess).to.equal("object")
    });
    it('should have two arguments of a user guess and A card object in play', function(){
        const questionCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
         const turn = new Turn('object', questionCard)
       
        expect(turn.card.question).to.deep.equal('What allows you to define a set of related information using key-value pairs?')
    });
// returnGuess: method that returns the guess
    it('should have a method that returns the guess', function(){
        const questionCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
         const turn = new Turn('object', questionCard)
       
        expect(turn.returnGuess()).to.equal('object')
    });
// returnCard: method that returns the Card
    it('should have a method to return the card', function(){
        const questionCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('object', questionCard)
        expect(turn.returnCard()).to.deep.equal(questionCard)
    });
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
it('should say True if user guess and answer match', function(){
    const questionCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
         const turn = new Turn('object', questionCard)
   
    expect(turn.evaluateGuess()).to.equal("True")
});
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
it('should say Incorrect or correct depending on if they matched', function(){
    const questionCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
         const turn = new Turn('array', questionCard)
   
    expect(turn.evaluateGuess()).to.equal("False")
    expect(turn.giveFeedback()).to.equal('Incorrect')
});
});