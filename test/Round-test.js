const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");

describe("Round", () => {
  let round;
  beforeEach(() => {
    round = new Round();
  });
  it("should be an instance of Round", () => {
    expect(round).to.be.an.instanceof(Round);
  });
});