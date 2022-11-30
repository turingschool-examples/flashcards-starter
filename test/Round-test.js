const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function() {
    let testcounter = 0;
    beforeEach(function () {
        testcounter ++;
        console.log(`Test #${testcounter}`);
    })

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

});