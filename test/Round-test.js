const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round.js");
const Turn = require("../src/Turn.js");
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");

describe("Round", function () {
var card1, card2, card3, deck, round 
// var card2 = null;
// var card3 = null;
var deck = null;
var round ;

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

    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function () {

    expect(round).to.be.an.instanceof(Round);
  });

  it("should store a deck", function () {

    expect(round.deck).to.equal(deck);
  });

  it("should return the current card", function () {

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("should have a method the updates the turns in the turn class", function () {

    round.takeTurn('pig');

    expect(round.turnCount).to.equal(1);

    round.takeTurn('hello');

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

  it('should calculate and return the percentage of correct guesses', function() {
    round.takeTurn('pig')
    round.takeTurn('gallbladder')
    round.takeTurn('playing with bubble wrap')

    expect(round.calculatePercentCorrect()).to.equal('66.67%')
  })

  it('should reset the turn count if theres more turns than cards', function() {
    round.takeTurn('pig')
    round.takeTurn('pig')
    expect(round.turnCount).to.equal(2)
    round.takeTurn('pig')
    expect(round.turnCount).to.equal(0)
  })

  it("should tell the user 'Round over! You answered <>% of the questions correctly!'", function() {
    round.takeTurn('pig')
    round.takeTurn('gallbladder')
    round.takeTurn('playing with bubble wrap')
    expect(round.endRound()).to.equal('Round over! You answered 66.67% of the questions correctly!')
  })
});
