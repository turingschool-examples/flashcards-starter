const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn;
  let card;

  beforeEach(() => {
    card = new Card(1, 'What is Ellie\'s favorite food?', ['sushi', 'beans', 'tomato pie'], 'sushi');
    turn = new Turn('sushi', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should instatiate Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should only recieve a string for guess', () => {
    expect(turn.guess).to.be.a('string');
  });

  it('should be able to take a user\'s guess', () => {
    expect(turn.guess).to.equal('sushi');
  });

  it('should instatiate Card',() => {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should be able to return a user\'s guess',() => {
    expect(turn.returnGuess()).to.equal('sushi');
  });

  it('should be able to return a card',() => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to determine if a guess is correct',() => {
    let turn = new Turn('sushi', card);

    expect(turn.evaluateGuess(turn.guess)).to.equal(true);
  });

  it('should be able to determine if a guess is incorrect',() => {
    let turn = new Turn('beans', card);

    expect(turn.evaluateGuess(turn.guess)).to.equal(false);
  });

  it('should be able tell user if they got the answer RIGHT',() => {
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should be able tell user if they got the answer WRONG',() => {
    turn = new Turn('beans', card);
    turn.evaluateGuess('beans');

    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

})
