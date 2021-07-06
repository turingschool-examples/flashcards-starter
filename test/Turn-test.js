const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');


describe('Turn', function() {
  let turn;
  let card;

  beforeEach(function() {
    card = new Card(1, 'Who is Rachel\'s favorite learning buddy?', ['Lady', 'Flooficorn', 'Dino Floof'], 'Lady');

    turn = new Turn('Flooficorn', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to return a guess', function() {
    let guess = turn.returnGuess();

    expect(guess).to.equal('Flooficorn');
  });

  it('should be able to return the card', function() {
    let cardInfo = turn.returnCard();

    expect(cardInfo).to.equal(card);
  });

  it('should be able to determine if guess is correct', function() {
    let turn2 = new Turn('Lady', card);

    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should return whether guess is correct', function() {
    let turn2 = new Turn('Lady', card);

    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});
