const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\s guess', function() {
    const turn = new Turn('pug', 'What is Robbie\s favorite animal');
    expect(turn.guess).to.equal('pug');
  });

  it('should store the current question', function() {
    const turn = new Turn('pug', 'What is Robbie\s favorite animal');
    expect(turn.question).to.equal('What is Robbie\s favorite animal');
  });

  it('should be able return the user\s guess', function() {
    const turn = new Turn('pug', 'What is Robbie\s favorite animal');
    expect(turn.returnGuess()).to.equal('pug');
  });
});
