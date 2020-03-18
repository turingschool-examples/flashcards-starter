const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card')


describe('Deck', function() {

it('should have cards', function() {
  var card1 = new Card(1, 'What is your favorite color?', ['blue', 'green', 'red', 'pink'], 'green');
  var card2 = new Card(2, 'Huh?', ['what?', 'excuse me?', 'hmmmm?'], 'what');
  var card3 = new Card(3, 'Paper or plastic', ['paper', 'plastic', 'I brough my own bags son!'], 'I brought my own fuckin bags!');
  var deck = new Deck([card1, card2, card3]);

  expect(deck.cards.length).to.equal(3);
})

it('should know how many cards are in the deck', function() {
var card1 = new Card(1, 'What is your favorite color?', ['blue', 'green', 'red', 'pink'], 'green');
var card2 = new Card(2, 'Huh?', ['what?', 'excuse me?', 'hmmmm?'], 'what');
var card3 = new Card(3, 'Paper or plastic', ['paper', 'plastic', 'I brough my own bags son!'], 'I brought my own fuckin bags!');
var deck = new Deck([card1, card2, card3]);


expect(deck.numCards).to.equal(3);
})







 })
