const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round.js");
const Turn = require("../src/Turn.js");
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");

describe("Round", function () {
var card1 = null;
var card2 = null;
var card3 = null;
var deck = null;
var round = null;

  beforeEach(function() {
       card1 = new Card(
        1,
        "What is Robbie's favorite animal",
        ["sea otter", "pug", "capybara"],
        "sea otter"
      );
       card2 = new Card(
        14,
        "What organ is Khalid missing?",
        ["spleen", "appendix", "gallbladder"],
        "gallbladder"
      );
       card3 = new Card(
        12,
        "What is Travis's favorite stress reliever?",
        ["listening to music", "watching Netflix", "playing with bubble wrap"],
        "playing with bubble wrap"
      );

      deck = new Deck([card1, card2, card3]);

      round = new Round(deck);
  })

  it("should be a function", function () {
    // const round = new Round();
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function () {
    // const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it("should store a deck", function () {
    // const card1 = new Card(
    //   1,
    //   "What is Robbie's favorite animal",
    //   ["sea otter", "pug", "capybara"],
    //   "sea otter"
    // );
    // const card2 = new Card(
    //   14,
    //   "What organ is Khalid missing?",
    //   ["spleen", "appendix", "gallbladder"],
    //   "gallbladder"
    // );
    // const card3 = new Card(
    //   12,
    //   "What is Travis's favorite stress reliever?",
    //   ["listening to music", "watching Netflix", "playing with bubble wrap"],
    //   "playing with bubble wrap"
    // );
    //
    // const deck = new Deck([card1, card2, card3]);
    //
    // const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it("should return the current card", function () {
    // const card1 = new Card(
    //   1,
    //   "What is Robbie's favorite animal",
    //   ["sea otter", "pug", "capybara"],
    //   "sea otter"
    // );
    // const card2 = new Card(
    //   14,
    //   "What organ is Khalid missing?",
    //   ["spleen", "appendix", "gallbladder"],
    //   "gallbladder"
    // );
    // const card3 = new Card(
    //   12,
    //   "What is Travis's favorite stress reliever?",
    //   ["listening to music", "watching Netflix", "playing with bubble wrap"],
    //   "playing with bubble wrap"
    // );
    //
    // const deck = new Deck([card1, card2, card3]);
    //
    // const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("should have a method the updates the turns in the turn class", function () {
    // const round = new Round();
    // const turn = new Turn()

    round.takeTurn('pig');

    expect(round.turnCount).to.equal(1);

    round.takeTurn('hello');
    // round.takeTurn('hi');

    expect(round.turnCount).to.equal(2);
  });

  it("should give feedback on the guess", function () {
    // const card1 = new Card(
    //   1,
    //   "What is Robbie's favorite animal",
    //   ["sea otter", "pug", "capybara"],
    //   "sea otter"
    // );
    // const card2 = new Card(
    //   14,
    //   "What organ is Khalid missing?",
    //   ["spleen", "appendix", "gallbladder"],
    //   "gallbladder"
    // );
    // const card3 = new Card(
    //   12,
    //   "What is Travis's favorite stress reliever?",
    //   ["listening to music", "watching Netflix", "playing with bubble wrap"],
    //   "playing with bubble wrap"
    // );
    //
    // const deck = new Deck([card1, card2, card3]);
    // const round = new Round(deck);
    // const turn = new Turn("pig", card1);
    // console.log(round.returnCurrentCard().correctAnswer)
    expect(round.takeTurn('pig')).to.equal('incorrect!')
    // console.log(round.returnCurrentCard().correctAnswer)
    expect(round.takeTurn('gallbladder')).to.equal('correct!')
  });

  it("should update turns count regardles of wether the guess is correct", function () {
    // const card1 = new Card(
    //   1,
    //   "What is Robbie's favorite animal",
    //   ["sea otter", "pug", "capybara"],
    //   "sea otter"
    // );
    // const card2 = new Card(
    //   14,
    //   "What organ is Khalid missing?",
    //   ["spleen", "appendix", "gallbladder"],
    //   "gallbladder"
    // );
    // const card3 = new Card(
    //   12,
    //   "What is Travis's favorite stress reliever?",
    //   ["listening to music", "watching Netflix", "playing with bubble wrap"],
    //   "playing with bubble wrap"
    // );
    //
    // const deck = new Deck([card1, card2, card3]);
    const turn = new Turn("pig");


    round.takeTurn("pig");

    expect(round.turnCount).to.equal(1);

    round.takeTurn('gallbladder')

    expect(round.turnCount).to.equal(2)
  });

  it('should change cards with each turn', function(){

    const turn = new Turn("pig");


    round.takeTurn("pig");
    round.returnCurrentCard()

    expect(round.currentCard).to.equal(card2);

  })

  it('should be able to record incorect guesses', function(){
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should store the card ID for the incorrect guess', function() {
    round.takeTurn('pig')
    expect(round.incorrectGuesses[0]).to.equal(1)
  })
});
