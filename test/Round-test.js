const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(() => {
    card1 = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter");
    card2 = new Card(14, "What organ is Khalid missing?", ["spleen", "appendix", "gallbladder"], "gallbladder");
    card3 = new Card(12, "What is Travis's middle name?", ["Lex", "William", "Fitzgerald"], "Fitzgerald");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });
  it("should be an instance of Round", () => {
    expect(round).to.be.an.instanceof(Round);
  });
  it("should pass in a deck", () => {
    expect(round.deck).to.be.an.instanceof(Deck);
  });
  it("should have a method to return current card", () => {
    let currCard = round.returnCurrentCard();
    expect(currCard).to.deep.equal(card1);
  });
  it("should have a turn counter", () => {
    expect(round.turns).to.equal(0);
  });
  it("should have an array of incorrect guesses", () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
  it("should allow user to take turn with a method", () => {
    let guessResult = round.takeTurn("sea otter");
    expect(guessResult).to.equal("correct!");
  });
  it("should return incorrect on wrong guess", () => {
    let guessResult = round.takeTurn("pug");
    expect(guessResult).to.equal("incorrect!");
  });
  it("should increment turn counter every turn", () => {
    expect(round.turns).to.equal(0);

    round.takeTurn("sea otter");
    round.takeTurn("spleen");

    expect(round.turns).to.equal(2);
  });
  it("should use a new card per turn", () => {
    expect(round.currentCard).to.deep.equal(card1);
    
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    
    expect(round.currentCard).to.deep.equal(card3);
  });
  it("should pass card id into array when guess is incorrect", () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
    
    round.takeTurn("sea otter");
    round.takeTurn("spleen");

    expect(round.incorrectGuesses).to.deep.equal([14]);
  });
  it("should calculate percent correct with a method", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    round.takeTurn("Lex");
    let prcCorrect = round.calculatePercentCorrect();

    expect(prcCorrect).to.equal(33);
  });
  it("should have method that indicates end of round and percentage correct", () => {
    expect(round.endRound).to.be.a("function");
  });
});