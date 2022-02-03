const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');




describe('Round', function() {
  //create variables that will store information
  let card1, card2, card3;
  let cards;
  let deck;
  let round;

  beforeEach(function() {
    //instantiate new cards with values
    card1 = new Card (1, 'What is a group of hedgehogs called?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    card2 = new Card (2, 'Where in it\s body is a shrimp\s heart located?', ['Head', 'Chest', 'Legs'], 'Head');
    card3 = new Card (3, 'Which animal never sleeps?', ['Bullfrog', 'Hummingbird', 'Shark'], 'Bullfrog');

    //let cards will be assigned to the 3 new cards
    cards = [card1, card2, card3];
    //let deck will be assigned to a new deck instantiation taking in the cards
    deck = new Deck(cards);
    //let round will be assigned to a new round instantiation taking in the deck
    round = new Round(deck);
  });

  //Round should be a function
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });
  //round should be an instance of Round
  it('should be an instance of a Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });
  //when a new round starts, it should return the first card in the deck
  it('should return the first card in the deck when new round starts', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

});
