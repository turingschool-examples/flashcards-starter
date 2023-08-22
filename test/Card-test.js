const chai = require("chai");
const expect = chai.expect;

const { createCard, evaluateGuess } = require("../src/card");

describe("card", function () {
  it("should be a function", function () {
    expect(createCard).to.be.a("function");
  });

  it("should create a card and its properties", function () {
    const card = createCard(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );

    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      "What allows you to define a set of related information using key-value pairs?"
    );
    expect(card.answers).to.deep.equal(["object", "array", "function"]);
    expect(card.correctAnswer).to.equal("object");
  });
  it("evaluate guess should be a function", function () {
    expect(evaluateGuess).to.be.a("function");
  });

  it("should evaluate whether a player's guess is correct", function () {
    const card = createCard(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );

    const rightAnswer = evaluateGuess("sea otter", card);

    expect(card.correctAnswer).to.equal("sea otter");
    expect(rightAnswer).to.equal("correct!");
  });

  it("should evaluate if a player's guess is incorrect", function () {
    const card = createCard(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );

    const wrongAnswer = evaluateGuess("pug", card);

    expect(card.correctAnswer).not.equal("pug");
    expect(wrongAnswer).to.equal("incorrect!");
  });
});
