const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe('Deck', () => {
  it('should be a function', function() {
    
      expect(Deck).to.be.a('function');
  });
  it("should hold an array of cards", function () {
      const card1 = new Card(1,"What is Robbie's favorite animal",["sea otter", "pug", "capybara"],"sea otter");
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Sam\'s middle name?', ['Lex', 'William', 'Kay'], 'Kay');
      const deck = new Deck([card1, card2, card3])
      expect(deck.cards).to.deep.equal([card1, card2, card3]);

  });it("should check for how many cards are in the deck", function () {
      const card1 = new Card(1,"What is Robbie's favorite animal",["sea otter", "pug", "capybara"],"sea otter");
      const card2 = new Card(14,"What organ is Khalid missing?",["spleen", "appendix", "gallbladder"],"gallbladder");
      const card3 = new Card(12,"What is Sam's middle name?",["Lex", "William", "Kay"],"Kay");
      const deck = new Deck([card1, card2, card3]);
      expect(deck.countCards()).to.equal(deck.cards.length);
      });
})   

