const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function(){
  let game

  beforeEach(() => {
    const exampleQuestions = [
      {
        'id': 1,
        'question':
        'answers':
        'correctAnswer':
      }, {
        'id': 2,
        'question':
        'answers':
        'correctAnswer':
      }, {
        'id': 3,
        'question':
        'answers':
        'correctAnswer':
      }, {
        'id': 4,
        'question':
        'answers':
        'correctAnswer':
      }
    ]

    let game = new Game(exampleQuestions)

})
})
