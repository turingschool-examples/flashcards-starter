const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function () {

  let card;
  let turn;

  this.beforeEach(function () {

    card = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');

    turn = new Turn('potato', card);

  })

  it('Should hold a users guess', function () {

    expect(turn.guess).to.equal('potato');

  });

  it('Should have a card Object', function () {

    expect(turn.guess).to.equal('potato');

    expect(turn.card).to.be.an.instanceof(Card);

  });

  it('Should return the users guess', function () {

    expect(turn.returnGuess()).to.equal('potato')

  });

  it('Should return the card of the object instance turn', function () {

    expect(turn.returnCard()).to.equal(turn.card)

  });

  it('Should return the false if guess is not correct', function () {

    expect(turn.evaluateGuess()).to.equal(false)

  });

  it('Should return the incorrect! if guess is not correct', function () {

    expect(turn.giveFeedback(card)).to.equal("incorrect!")

  });

});