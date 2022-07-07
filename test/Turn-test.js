const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn1;
  let turn2;
  let card;

  beforeEach(() => {  
    card = new Card(9, 'What does the callback function for find() return?', ["boolean", "array", "object"], 'boolean');
    turn1 = new Turn('object', card);
    turn2 = new Turn('iteration method', card) 
  })
  it('should be a function', () => {
   
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should be able to input answer to a question as a string', () => {

    expect(turn1.userGuess).to.be.a('string');
    expect(turn2.userGuess).to.equal('iteration method');
  });

  it('should have a Card object for the current card in play', () => {
    var newCard = new Card({
          id: 9, 
          question: 'What does the callback function for find() return?', 
          answers: ["boolean", "array", "object"], 
          correctAnswer: 'boolean',
        })

     
    expect(turn1.currentCard).to.be.an.instanceof(Card)
    // expect(turn1.currentCard).to.equal(newCard);
  });

  it('should be a method that returns a user guess input', () => {

    expect(turn1.userGuess).to.be.a('string');
    expect(turn2.userGuess).to.equal('iteration method');
  });

  it('should be a method that returns the Card', () => {

    expect(turn1.returnCard()).to.equal(turn1.currentCard);
    // expect(turn2.currentCard).to.equal(turn2.currentCard);
  });
  it('should be a method that returns a boolean indicating if the user/s guess matches the correct answer on the card', () => {

    expect(turn1.evaluateGuess()).to.equal(false);
  });
  it('should be a method that returns either `ON POINT!` or `NEXT TIME! :(` based on whether the guess is correct or not.', () => {
    
    expect(turn1.giveFeedback()).to.equal('NEXT TIME! :(');
  });

});
