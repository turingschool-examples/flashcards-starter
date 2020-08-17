const chai = require('chai');
const expect = chai.expect;

const Test = require('../src/Test');

describe('Test', function() {

  it('should be a function', function() {
    const test = new Test();
    expect(Test).to.be.a('function');
  });

  it('should be an instance of Test', function() {
    const test = new Test();
    expect(test).to.be.an.instanceof(Test);
  });
});
