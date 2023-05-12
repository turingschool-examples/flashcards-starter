const chai = require("chai");
const expect = chai.expect;

const { createCard } = require("../src/card");
const { prototypeData } = require("../src/data");
const { createDeck, countCards } = require("../src/deck");
const { evaluateGuess } = require("../src/turns");
const { createRound, takeTurn, endRound, calculatePercentCorrect } = require("../src/round");

describe("round", function() {
  it("createRound should be a function", function() {
    expect(createRound).to.be.a("function");
  });

  it("createRound should create a round properly", function() {
    
  
  const testsData = prototypeData;
  const card1 = createCard(testsData[2].id, testsData[2].question, testsData[2].answers, testsData[2].correctAnswer);
  const card2 = createCard(testsData[3].id, testsData[3].question, testsData[3].answers, testsData[3].correctAnswer);
  const card3 = createCard(testsData[4].id, testsData[4].question, testsData[4].answers, testsData[4].correctAnswer);
  const cards = [card1,card2,card3];
  const deck = createDeck(cards);
  const round = createRound(deck);

  expect(round.deck[1]).to.deep.equal(card2);
  expect(round.currentCard).to.deep.equal(card1);
  expect(round.turns).to.equal(0)
  expect(round.incorrectGuesses.length).to.equal(0)
  });


  it("takeTurn should be a function", function() {
    expect(takeTurn).to.be.a("function");
  });

  it("takeTurn should handle rounds properly", function() {
  const testsData = prototypeData;
  const card1 = createCard(testsData[2].id, testsData[2].question, testsData[2].answers, testsData[2].correctAnswer);
  const card2 = createCard(testsData[3].id, testsData[3].question, testsData[3].answers, testsData[3].correctAnswer);
  const card3 = createCard(testsData[4].id, testsData[4].question, testsData[4].answers, testsData[4].correctAnswer);
  const card4 = createCard(testsData[5].id, testsData[5].question, testsData[5].answers, testsData[5].correctAnswer);
  const cards = [card1,card2,card3,card4];
  const deck = createDeck(cards);
  const round = createRound(deck);
  const turn1 = takeTurn("mutator method", round);
  const turn2 = takeTurn("mutator method", round);
  const turn3 = takeTurn("mutator method", round);
  expect(round.incorrectGuesses).to.deep.equal([4, 5]);
  expect(round.turns).to.equal(3);
  expect(round.currentCard).to.deep.equal(card4);
  });

  it("calculateRound should be a function", function() {
    expect(calculatePercentCorrect).to.be.a("function");
  });

  it("calculateRound should calculate win percentage", function() {
    const testsData = prototypeData;
    const card1 = createCard(testsData[2].id, testsData[2].question, testsData[2].answers, testsData[2].correctAnswer);
    const card2 = createCard(testsData[3].id, testsData[3].question, testsData[3].answers, testsData[3].correctAnswer);
    const card3 = createCard(testsData[4].id, testsData[4].question, testsData[4].answers, testsData[4].correctAnswer);
    const card4 = createCard(testsData[5].id, testsData[5].question, testsData[5].answers, testsData[5].correctAnswer);
    const cards = [card1,card2,card3,card4];
    const deck = createDeck(cards);
    const round = createRound(deck);
    const turn1 = takeTurn("mutator method", round);
    const turn2 = takeTurn("mutator method", round);
    const turn3 = takeTurn("mutator method", round);
    const percentCorrect = calculatePercentCorrect(round);
    expect(percentCorrect).to.equal("33.33%")
  });

  it("endRound should be a function", function() {
    expect(endRound).to.be.a("function");
  });

  it("endRound should print the message", function() {
    const testsData = prototypeData;
    const card1 = createCard(testsData[2].id, testsData[2].question, testsData[2].answers, testsData[2].correctAnswer);
    const card2 = createCard(testsData[3].id, testsData[3].question, testsData[3].answers, testsData[3].correctAnswer);
    const card3 = createCard(testsData[4].id, testsData[4].question, testsData[4].answers, testsData[4].correctAnswer);
    const card4 = createCard(testsData[5].id, testsData[5].question, testsData[5].answers, testsData[5].correctAnswer);
    const cards = [card1,card2,card3,card4];
    const deck = createDeck(cards);
    const round = createRound(deck);
    const turn1 = takeTurn("mutator method", round);
    const turn2 = takeTurn("mutator method", round);
    const turn3 = takeTurn("mutator method", round);
    const end = endRound(round)
    expect(end).to.equal("** Round over! ** You answered 33.33% of the questions correctly!")
  });  


});



// const evaluateGuess = (guess, correctAnswer) => {
//   if (guess === correctAnswer){
//     return "correct!"
//   } else {
//     return "incorrect!"
//   }
// }

// const aGuess1 = "mutator method";
//     const aCorrectGuess = evaluateGuess(aGuess1, card.correctAnswer);

//     expect(aCorrectGuess).to.equal("correct!");


// {
//   "id": 3,
//   "question": "What type of prototype method directly modifies the existing array?",
//   "answers": ["mutator method", "accessor method", "iteration method"],
//   "correctAnswer": "mutator method"
// }, {
//   "id": 4,
//   "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
//   "answers": ["mutator method", "accessor method", "iteration method"],
//   "correctAnswer": "accessor method"
// }, {
//   "id": 5,
//   "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
//   "answers": ["mutator method", "accessor method", "iteration method"],
//   "correctAnswer": "iteration method"
// }

// {
//   "id": 6,
//   "question": "What is an example of a mutator method?",
//   "answers": ["sort()", "map()", "join()"],
//   "correctAnswer": "sort()"
// }