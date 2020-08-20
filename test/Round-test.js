const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  })

  it('should be an instance of a Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card being played', function(){
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    // console.log(turn.card);
    const round = new Round();

    round.currentCard(turn.card)

  })








});
