const chai = require("chai");
const expect = chai.expect;

const { createCard } = require("../src/card");
const { prototypeData } = require("../src/data");
const { createDeck, countCards } = require("../src/deck");

describe("deck", function() {
  it("createDeck should be a function", function() {
    expect(createDeck).to.be.a("function");
  });
  it("createDeck should return an array of card objects as a deck", function() {
  
  const testsData = prototypeData;
  const card1 = createCard(testsData[2].id, testsData[2].question, testsData[2].answers, testsData[2].correctAnswer);
  const card2 = createCard(testsData[3].id, testsData[3].question, testsData[3].answers, testsData[3].correctAnswer);
  const card3 = createCard(testsData[4].id, testsData[4].question, testsData[4].answers, testsData[4].correctAnswer);
  const cards = [card1,card2,card3];
  const deck = createDeck(cards);
  expect(deck[0].id).to.equal(3);
  expect(deck[1].id).to.equal(4);
  expect(deck[2].id).to.equal(5);
  });
  it("countCards should be a function", function() {
    expect(countCards).to.be.a("function");
  });

  it("countCards should return length of deck array", function() {
    const testsData = prototypeData;
    const card1 = createCard(testsData[2].id, testsData[2].question, testsData[2].answers, testsData[2].correctAnswer);
    const card2 = createCard(testsData[3].id, testsData[3].question, testsData[3].answers, testsData[3].correctAnswer);
    const card3 = createCard(testsData[4].id, testsData[4].question, testsData[4].answers, testsData[4].correctAnswer);
    const cards = [card1,card2,card3];
    const deck = createDeck(cards);
    const countDeck = countCards(deck)
    expect(countDeck).to.equal(3);
  });
});



