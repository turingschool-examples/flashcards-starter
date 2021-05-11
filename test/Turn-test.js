const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {

  // beforeEach(function() {
  //   const card = new Card(6, 'What is an example of a mutator method?');
  //   const turn = new Turn();
  // })

  it('should be a function', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn)
  });
  it('should pass two parameters representing question and Card object', function() {
    const card = new Card(6, 'What is an example of a mutator method?')
    const turn = new Turn('sort()', card)

    expect(turn.guess).to.equal('sort()')
    expect(turn.card).to.be.a('object')
    expect(turn.card.id).to.equal(6)
  })
});

describe('returnGuess', function() {

  it('it should be a method', function(){
    const turn = new Turn();

    turn.returnGuess()

    expect(turn.returnGuess).to.be.a('function');
  })

  it('it should return the guess', function(){
    const turn = new Turn('sort()');

    const guess = turn.returnGuess()

    expect(guess).to.equal('sort()')
  })
})

describe('returnCard', function(){

  beforeEach('setup', function() {
    const turn = new Turn('sort()', card)
  })

  it('it should be a method', function(){
    // const turn = new Turn();

    turn.returnCard()

    expect(turn.returnCard).to.be.a('function');
  })

  it('it should return the card', function(){
    const card = new Card(6, 'What is an example of a mutator method?')
    // const turn = new Turn('sort()', card)
    
    card1 = turn.returnCard()
    
    expect(card1).to.equal(card)
  })
})

