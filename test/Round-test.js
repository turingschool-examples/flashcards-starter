const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round")

    
describe("Round", () => {
  let card1, card2, card3, deck, round

  beforeEach(() => {
    card1 = new Card(1,"What is Robbie's favorite animal",["sea otter", "pug", "capybara"],"sea otter");
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12,"What is Travis's middle name?",["Lex", "William", "Fitzgerald"],"Fitzgerald");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck)
  })

  it("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it("should hold the current deck", () => {
    expect(round.deck).to.be.an.instanceOf(Deck)
  })

  it("should return the current card being played", () => {
    expect(round.returnCurrentCard()).to.deep.equal(this.deck[0])
  })
})