const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  });


})
// describe('Card', function () {

//   it('should be a function', function () {
//     const card = new Card();
//     expect(Card).to.be.a('function');
//   });
