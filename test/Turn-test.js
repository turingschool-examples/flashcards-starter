const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){
  it('should be a function', function(){
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function(){
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should take a user/s guess as an argument', function(){
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should take in any string as the user/s guess', function(){
    const turn = new Turn('poodle');
    expect(turn.guess).to.equal('poodle');
  });

  it('should use a card for the current guess', function(){
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.card).to.equal(card);
  });


});
