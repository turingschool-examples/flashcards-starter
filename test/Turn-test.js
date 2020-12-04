const chai = require('chai');
const expect = chai.expect
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');


describe('Turn', () => {
  let card;
  let turn1;
  let turn2;
  beforeEach( () => {
    card = new Card(1, 'Between Ron Weasley, Hermione Granger, and Harry Potter, who was acknowledged as being the best at spells?', ['Hermione', 'Ron', 'Harry'], 'Hermione');
    turn1 = new Turn('Hermione', card);
    turn2 = new Turn('Ron', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it(`should store the user's guess`, () => {
    expect(turn1.guess).to.equal('Hermione');
  });

  it('should store the flash card for this current turn', () => {
    expect(turn1.card).to.deep.equal(card);
  });

  it('should be able to return the guess for this turn', () => {
    expect(turn1.returnGuess()).to.equal('Hermione');
  });

  it('should be able to return the current flash card in play', () => {
    expect(turn1.returnCard()).to.deep.equal(card);
  });

  it('should be able to return a true or false value if the guess was right or wrong, repsectively', () => {
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should return a message whether the guess is correct or not', () => {
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
