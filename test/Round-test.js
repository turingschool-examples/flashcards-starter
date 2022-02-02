const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Round', () => {

  let round;

  beforeEach(() => {
    card = new Card(1, 'What is 1 + 1 ?', ['2', '3', '4'], '2');
    card2 = new Card(2, 'What is 2 + 2 ?', ['2', '3', '4'], '4');
    round = new Round(card, 0);
    });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })

  it('should be able to take a turn', () => {
    round.takeTurn('2')
    expect(round.turns).to.equal(1)
  })

  it('should instantiate a new instance of Turn', () => {
    round.takeTurn('2')
    expect(round.takeTurn()).to.be.an.instanceOf(Turn)
  })

  it('should be able to return the current card', () => {
    round.returnCurrentCard()
    expect(round.returnCurrentCard()).to.deep.equal(card)
    round = new Round(card2, 0);
    round.returnCurrentCard()
    expect(round.returnCurrentCard()).to.deep.equal(card2)
  })


})
