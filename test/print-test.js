const chai = require("chai");
const expect = chai.expect;

const { convertTimerToString } = require("../src/timer");

describe("Print Timer", () => {
  it("Print 0 seconds", () => {
    expect(convertTimerToString(0)).to.equal("0s");
  });
  it("Print 35 seconds", () => {
    expect(convertTimerToString(35000)).to.equal("35s");
  });
  it("Print 1 minute", () => {
    expect(convertTimerToString(60000)).to.equal("1m");
  });
  it("Print 32 minute 13 seconds", () => {
    expect(convertTimerToString(1933000)).to.equal("32m13s");
  });
  it("Print 1 hour", () => {
    expect(convertTimerToString(3600000)).to.equal("1hr");
  });
  it("Print 1 hour 10min 12 seconds", () => {
    expect(convertTimerToString(4212000)).to.equal("1hr10m12s");
  });
});
