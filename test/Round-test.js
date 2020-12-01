const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function () {

  it('should be a function', function () {
    const round = new Round()
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function () {
    const round = new Round()
    expect(round).to.be.an.instanceof(Round)
  })

  // it('should return the current card', function (){
  //
  // })

  // it('should instantiate a Turn', function () {
  // const round = new Round()
  // const turn = new Turn()
  // })

  it('should add one to the turn count', function () {

  })

  it('should change the current card to be the next card', function () {

  })

  it('should evaluate the current guess', function () {

  })
})