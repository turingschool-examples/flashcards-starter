const chai = require('chai');
const expect = chai.expect;
const Turn = require ('../src/Turn');
const Card = require ('../src/Card');

describe ('Turn', function() {
    it('should be a function', () => {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should instantiate our good friend Turn', () => {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should store a the user guess as a string')
        const turn = new Turn('user guess', Card);

    it('should store an instance of the Card class')
        const turn = new Turn('user guess', Card);

});