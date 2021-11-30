const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe( 'Turn', () => {
    
   it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

})