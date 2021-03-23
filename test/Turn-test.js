/* eslint-disable max-len */
const mocha = require("mocha");
const chai = require("chai");

const beforeEach = mocha.beforeEach;
const expect = chai.expect;

const Turn = require("../src/Turn.js");
const Card = require("../src/Card.js")

describe("Turn", () => {

  it("should be able to instantiate a Turn", () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  })

  it("should store a user's guess and a Card instance", () => {
    const card = new Card(
      1, "Which of the following keywords will declare a variable that is not hoisted within its block?", ["var", "let", "new"], "let"
    );
    const turn = new Turn("let", card);

    expect(turn.answer).to.equal("let");
    expect(turn.card).to.equal(card);
  })

  describe("returnGuess()", () => {
    let card;
    let turn;

    beforeEach("setup Card and Turn instances", () => {
      card = new Card(
        1, "Which of the following keywords will declare a variable that is not hoisted within its block?", ["var", "let", "new"], "let"
      );
      turn = new Turn("let", card);
    })

    it("should be a function", () => {
      expect(turn.returnGuess).to.be.a("function");
    })

    it("should return a user's guess", () => {
      const guess = turn.returnGuess();
      expect(guess).to.equal("let");
    })
  })

  describe("returnCard", () => {
    let card;
    let turn;

    beforeEach("setup Card and Turn instances", () => {
      card = new Card(
        1, "Which of the following keywords will declare a variable that is not hoisted within its block?", ["var", "let", "new"], "let"
      );
      turn = new Turn("let", card);
    })

    it("should be a function", () => {
      expect(turn.returnCard).to.be.a("function");
    })

    it("should return a Card instance", () => {
      const returnedCard = turn.returnCard();
      expect(returnedCard).to.equal(card);
    })

  })

  describe("evaluateGuess()", () => {
    let card;

    beforeEach("setup Card and Turn isntances", () => {
      card = new Card(
        1, "Which of the following keywords will declare a variable that is not hoisted within its block?", ["var", "let", "new"], "let"
      );
    })
    
    it("should be a function", () => {
      const turn = new Turn("let", card);
      expect(turn.evaluateGuess).to.be.a("function");
    })

    it("should indicate when a user's guess is correct", () => {
      const turn = new Turn("let", card);
      const isCorrect = turn.evaluateGuess();

      expect(isCorrect).to.be.true;
    })

    it("should indicate when a user's guess is incorrect", () => {
      const turn = new Turn("var", card);
      const isCorrect = turn.evaluateGuess();

      expect(isCorrect).to.be.false;
    })
  })

  describe("giveFeedback()", () => {
    let card;

    beforeEach("setup Card and Turn isntances", () => {
      card = new Card(
        1, "Which of the following keywords will declare a variable that is not hoisted within its block?", ["var", "let", "new"], "let"
      );
    })

    it("should be a function", () => {
      const turn = new Turn("let", card);
      expect(turn.giveFeedback).to.be.a("function");
    })

    it("should return 'correct!' when a user's guess is correct", () => {
      const turn = new Turn("let", card);
      const message = turn.giveFeedback();

      expect(message).to.equal("correct!");
    })

    it("should return 'incorrect!' when a user's guess is incorrect", () => {
      const turn = new Turn("var", card);
      const message = turn.giveFeedback();

      expect(message).to.equal("incorrect!");
    })
  })
})
