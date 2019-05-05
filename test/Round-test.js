const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');


describe('Round', function() {

  it('should be a function', function () {
    const round = new Round();
    expect(Round).to.be.a('function');
  })

  it('should be a new instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  })

  it('should have a method to return the current card', function() {
    const round = new Round();
    const deck = [card1, card2, card3]
    expect(round.returnCurrentCard).to.be.a('function');
    round.returnCurrentCard(deck);
    expect(round.returnCurrentCard).to.equal
  })



  });