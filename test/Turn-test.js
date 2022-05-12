const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {

 it('should be a function', () => {
     const turn = new Turn();
     expect(Turn).to.be.a('function')
 });
 it('should be an instance of Turn', () => {
    const turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn)
 });
 it('should instanciate a guess to the question', () => {
     const turn = new Turn('pug')
     expect(turn.guess).to.equal('pug')
 })
})