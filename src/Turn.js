const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

class Turn {
    constructor() {
        this.userGuess = 'pug';
        this.currentCard  = new Card();
    };
    // userGuess(){
    //     return 'pug';
    // };
};

module.exports = Turn;

