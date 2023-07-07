const chai = require('chai');
const expect = chai.expect;

const { printMessage, printQuestion, start } = require('../src/game');

describe('start', function() {
  it('should be a function', function() {
    expect(start).to.be.a('function')
  });
})