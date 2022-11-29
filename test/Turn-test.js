const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const prototypeData = require('../src/data.js');

describe('Turn', function() {
    let testcounter = 0;
    beforeEach(function () {
        testcounter ++;
        console.log(`Turn: Test ${testcounter}`);
    })

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    })

    it('should store a guess', function() {
        const turn = new Turn('Array', prototypeData[1]);
        console.log(turn);
        expect(turn.guess).to.equal('Array');
    })
}) 