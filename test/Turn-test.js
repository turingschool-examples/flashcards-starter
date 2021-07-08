const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card;
  let turn;

  beforeEach(() => { //do I need a parameter???
    card = new Card(
   1,
   "What is Robbie's favorite animal",
   ['sea otter', 'pug', 'capybara'],
   'sea otter'
 );
 turn = new Turn('pug', card);
});
