const chai = require('chai');
const Turn = require('../src/Turn');
const expect = chai.expect;

const Card = require('../src/Turn');

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    })
})