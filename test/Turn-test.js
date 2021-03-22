const chai = require('chai');
const expect = chai.expect;

const Turn = require("../src/Turn.js");
const Card = require("../src/Card.js")

describe("Turn", () => {

  it("should be able to instantiate a Turn", () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  })

  it("should store a user's guess to a question and a Card object", () => {
    const card = new Card(
      1, "Which of the following keywords will declare a variable that is not hoisted within its block?", ["var", "let", "new"], "let"
    );
    const turn = new Turn("let", card);

    expect(turn.answer).to.equal("let");
    expect(turn.card).to.equal(card);
  })
})
