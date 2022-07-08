const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
//const prototypeData = require("../src/data");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const Turn = require("../src/Turn");

describe("Round", function () {
  let deck, round, card1, card2, card3, turn;

  beforeEach(function () {
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
    turn = new Turn("sea otter", card1);
    // console.log("1", turn);
    // console.log("2", card1);
    // console.log("3", turn.guess);
  });

  it("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function () {
    expect(round).to.be.an.instanceof(Round);
  });

  it("should return the current card", function () {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it("should take turn and increment the turns", function () {
    round.takeTurn();
    round.takeTurn();
    round.takeTurn();

    expect(round.turns).to.equal(3);
  });

  it("should start with no wrong guesses", function () {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should evaluate correct guess", function () {
    round.takeTurn("gallbladder");
    expect(round.takeTurn("gallbladder")).to.equal("Correct");
  });

  it("should evaluate incorrect guess", function () {
    // const correctAnswersForRound = turn.card;
    // const newAnswers = correctAnswersForRound.map();
    // console.log(correctAnswersForRound);
    round.takeTurn("manatee");
    expect(round.takeTurn()).to.equal("Incorrect");
  });

  // const strings = ['10', '10', '10'];
  // const numbers = strings.map(parseInt);
  // const map1 = array1.map(x => x * 2);

  it("should do nothing if guess is correct", function () {
    round.takeTurn("sea otter");
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should store incorrect guess", function () {
    round.takeTurn("guess");
    expect(round.incorrectGuesses.length).to.deep.equal(1);
  });

  // it("should give the user feedback on their guess", function () {
  //   round.takeTurn("sea otter");
  //   expect(round.takeTurn()).to.equal("Correct");

  //   round.takeTurn("guess");
  //   expect(round.takeTurn()).to.deep.equal("Incorrect");
  // });

  it("should calculate the correct percentage", function () {
    round.takeTurn("sea otter");
    round.takeTurn("manatee");
    round.takeTurn("manatee");
    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal(33.33);
  });

  it("should end the round", function () {
    round.takeTurn("sea otter");
    round.takeTurn("manatee");
    round.takeTurn("manatee");
    round.calculatePercentCorrect();

    expect(round.endRound()).to.equal(`Round over! You answered %${33.33}`);
  });
});

// it('should be able to set the race distance in miles', function() {
//   var race1 = new Roadrace({title: 'Rock N Roll Half Marathon', city: "Las Vegas"});
//   var race2 = new Roadrace({title: 'City Park Marathon', city: "Denver"});

//   var race1Distance = race1.setDistance(13.1);
//   var race2Distance = race2.setDistance(26.2);

//   assert.equal(race1.distance, 13.1);
