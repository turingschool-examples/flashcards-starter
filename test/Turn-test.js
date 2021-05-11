const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

let card, turn

beforeEach( () => {
  card = new Card(6, 'What is an example of a mutator method?');
  turn = new Turn('sort()', card);
})

describe('Turn', () => {

  it('should be a function', () => {

    expect(turn).to.be.an.instanceOf(Turn)
  });
  it('should pass two parameters representing question and Card object', () =>{

    expect(turn.guess).to.equal('sort()')
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

    expect(guess).to.equal('sort()')
  })
})

describe('returnCard', () => {

  it('it should be a method', () => {

    turn.returnCard()

    expect(turn.returnCard).to.be.a('function');
  })

  it('it should return the card', () => {
    
    card1 = turn.returnCard()
    
    expect(card1).to.equal(card)
  })
})

describe('evaluteGuess', () => {

  it('should be a method', () => {

    turn.evaluateGuess()

    expect(turn.evaluateGuess).to.be.a('function');
  })

  // it('should return boolean indicating if user\'s guess is correct', () => {

  //   turn1
  // })
})
