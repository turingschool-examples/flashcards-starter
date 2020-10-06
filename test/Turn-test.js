const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn;
  beforeEach(() => {
    const turn = new Turn();
  })
})

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', function() {
    const turn = new Turn('red');

    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('red');
  });

  it('should store a user\'s guess and the current card in play', function() {

    const card = new Card(1,
    'You live in a one story house made entirely of redwood. What color would the stairs be?',
    ['wood', 'red', 'What stairs? You live in a one-story house'],'What stairs? You live in a one-story house');
    const turn = new Turn('red', card);

    expect(turn.card).to.be.an.instanceof(Card);
    // expect(turn.card.answer).to.include('red');
  })
  it('sh')
});
