const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", () => {
  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("should be a new instance of Turn", () => {
    const card1 = new Card(1, "What is Robbie\'s favorite animal",["sea otter", "pug", "capybara"], "sea otter");
    const turn = new Turn('pug', card1)
    expect(turn).to.be.an.instanceof(Turn);
  })
  it("should take the player\'s guess as an argument", () => {
        const card1 = new Card(
          1,
          "What is Robbie's favorite animal",
          ["sea otter", "pug", "capybara"],
          "sea otter"
        );
    const turn = new Turn("sea otter", card1);
    expect(turn.guess).to.equal('sea otter');
  });
  it("should return the guess", () => {
       const card1 = new Card(
         1,
         "What is Robbie's favorite animal",
         ["sea otter", "pug", "capybara"],
         "sea otter"
       );
    const turn = new Turn("sea otter", card1);
    expect(turn.returnGuess()).to.equal('sea otter');

        })

});