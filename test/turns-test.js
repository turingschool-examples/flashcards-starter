const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/turns');

describe('Turns', function() {
    let turn = new Turn()
    let card = new Card()

    beforeEach(() => {
        console.log("My code is running!")
        turn = new Turn('guess', card)
    })

    it('should be a function', function(){
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', function() {
        expect(turn).to.be.an.instanceOf(Turn);
    });
    it('should be able to return a guess', function() {
        
    })
})