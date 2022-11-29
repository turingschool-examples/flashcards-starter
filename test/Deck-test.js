const chai = require('chai');
const Deck = require('../src/Deck');
const expect = chai.expect;

describe('Deck', function () {
it('Should be a function', function () {
    const deck = new Deck()
    expect(Deck).to.be.a('function')
})
})