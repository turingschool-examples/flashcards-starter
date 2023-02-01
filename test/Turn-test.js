const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", () => {
  let card, turn

  beforeEach(()=> {
    card = new Card(1,"What is Robbie's favorite animal",["sea otter", "pug", "capybara"],"sea otter")
    turn = new Turn("sea otter", card)
  })
  
  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });
  
  it("should be a new instance of Turn", () => {
    expect(turn).to.be.an.instanceof(Turn);
  })
  
  it("should take the player\'s guess as an argument", () => {
    expect(turn.guess).to.equal('sea otter');
  });
  
  it("should have a method that returns the player's guess", () => {
    expect(turn.returnGuess()).to.equal("sea otter");
  });
  
  it("should have a method that returns the card object", () => {
    expect(turn.returnCard()).to.equal(card);
  });
  
  it("should have a method that returns a boolean indicating if the user's guess is correct", () => {
    expect(turn.evaluateGuess()).to.equal(true);
    
  });
  it("should have a method that returns a boolean indicating if the user's guess is incorrect", () => {
    incorrectTurn = new Turn("pug", card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it("should have a method that returns if the answer is correct", () => {
    expect(turn.giveFeedback()).to.equal("correct!") 
  });

  it("should have a method that returns if the answer is incorrect", () => {
    const incorrectTurn = new Turn("pug", card)
    expect(incorrectTurn.giveFeedback()).to.equal("incorrect!"); 
  });
  
});