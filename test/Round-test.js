const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe("Round", () => {
    let card1, card2, card3, deck, round;
  
    beforeEach(() => {
      card1 = new Card(
        1,
        "What allows you to define a set of related information using key-value pairs?",
        ["object", "array", "function"],
        "object"
      );
      card2 = new Card(
        29,
        "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
        ["true", "false"],
        "true"
      );
      card3 = new Card(
        27,
        "Accessor methods permanently modify the original array, mutator methods do not.",
        ["true", "false"],
        "false"
      );
      deck = new Deck([card1, card2, card3]);
      round = new Round(deck);
    });
  

    
    it("should be a function", () => {
      expect(Round).to.be.a("function");
    });
  
    it("should be an instance of Round", () => {
      expect(round).to.be.an.instanceof(Round);
    });
  
    it("should make the first card in deck the current card", () => {
      expect(round.returnCurrentCard()).to.equal(card1);
    });

});