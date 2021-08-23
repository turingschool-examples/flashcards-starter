const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  it('should be a function', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  })

  it('should be a instance of Round', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round).to.be.a.instanceof(Round);
  })

  it('should take have a current card', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.equal(card1);
  })

  it('should be able to return the current card', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  })
})
