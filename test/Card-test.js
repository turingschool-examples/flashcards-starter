const chai = require("chai");
const expect = chai.expect;

const { createCard } = require("../src/card");
const { prototypeData } = require("../src/data");

describe("card", function() {
  it("should be a function", function() {
    expect(createCard).to.be.a("function");
  });

  it("should create a card and its properties", function() {
    const testsData = prototypeData;
    const card = createCard(testsData[2].id, testsData[2].question, testsData[2].answers, testsData[2].correctAnswer);
    // {
    //   "id": 3,
    //   "question": "What type of prototype method directly modifies the existing array?",
    //   "answers": ["mutator method", "accessor method", "iteration method"],
    //   "correctAnswer": "mutator method"
    // }
    expect(card.id).to.equal(3);
    expect(card.question).to.equal("What type of prototype method directly modifies the existing array?");
    expect(card.answers).to.deep.equal(["mutator method", "accessor method", "iteration method"]);
    expect(card.correctAnswer).to.equal("mutator method");
  });  
});