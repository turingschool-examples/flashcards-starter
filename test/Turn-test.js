const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

let card, turn

beforeEach( () => {
  card = new Card(6, 'What is an example of a mutator method?', ["sort()", "map()", "join()"], "sort()");
  turn = new Turn( "sort()", card);
})

describe('Turn', () => {

  it('should be a function', () => {

    expect(turn).to.be.an.instanceOf(Turn)
  });

  it('should pass two parameters representing question and Card object', () =>{

    expect(turn.guess).to.equal( "sort()")
    expect(turn.card).to.be.a('object')
    expect(turn.card.id).to.equal(6)
  })
});

describe('returnGuess', () =>{

  it('it should be a method', () => {

    turn.returnGuess()

    expect(turn.returnGuess).to.be.a('function');
  })

  it('it should return the guess', () => {

    const guess = turn.returnGuess()

    expect(guess).to.equal( "sort()")
  })
})

describe('returnCard', () => {

  it('it should be a method', () => {

    turn.returnCard()

    expect(turn.returnCard).to.be.a('function');
  })

  it('it should return the card', () => {
    
    let card1 = turn.returnCard()
    
    expect(card1).to.equal(card)
  })
})

describe('evaluteGuess', () => {

  it('should be a method', () => {

    turn.evaluateGuess()

    expect(turn.evaluateGuess).to.be.a('function');
  })

  it('should indicate if user\'s guess is correct', () => {
    
    turn.evaluateGuess()

    expect(turn.evaluateGuess()).to.equal(true)
  })

  it('should indicate if user\'s guess is incorrect', () => {
    turn.guess = 'map()'

    turn.evaluateGuess()

    expect(turn.evaluateGuess()).to.equal(false)
  })

  describe('giveFeedback', () => {

    it('should be a method', () => {

      turn.giveFeedback()
  
      expect(turn.giveFeedback).to.be.a('function');
    })

    it('should tell the user if correct', () => {

      turn.giveFeedback()

      expect(turn.giveFeedback()).to.equal('correct!')
    })

    it('should tell the user if incorrect', () => {
      turn.guess = 'map()'
      
      turn.giveFeedback()

      expect(turn.giveFeedback()).to.equal('incorrect!')
    })
  })
})
