const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Game = require("../src/Game");
const Round = require("../src/Round");

describe("Game", () => {
  let round, game;

  beforeEach(() => {
    cardData = [(testData[0].id,testData[0].question,testData[0].answers,testData[0].correctAnswer),
    (testData[1].id,testData[1].question,testData[1].answers,testData[1].correctAnswer),
    (testData[2].id,testData[2].question,testData[2].answers,testData[2].correctAnswer)]
  })
})
