const chai = require("chai");
const expect = chai.expect;

const { createCard } = require("../src/card");
const { prototypeData } = require("../src/data");
const { evaluateGuess } = require("../src/turns");

describe("turns", function() {
  it("should be a function", function() {
    expect(evaluateGuess).to.be.a("function");
  });

  it("should be correct", function() {
    const testsData = prototypeData;
    const card = createCard(testsData[2].id, testsData[2].question, testsData[2].answers, testsData[2].correctAnswer);
    const aGuess1 = "mutator method";
    const aCorrectGuess = evaluateGuess(aGuess1, card.correctAnswer);

    expect(aCorrectGuess).to.equal("correct!");
  });
  it("should be incorrect", function() {
    const testsData = prototypeData;
    const card = createCard(testsData[2].id, testsData[2].question, testsData[2].answers, testsData[2].correctAnswer);
    const aGuess2 = "accessor method";
    const anIncorrectGuess = evaluateGuess(aGuess2, card.correctAnswer);

    expect(anIncorrectGuess).to.equal("incorrect!");
  });
});