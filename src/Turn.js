class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
    }
    
    returnGuess() {
        console.log(this.guess)
        return this.guess; 
        
    }
    
    returnCard() {
        console.log(this.card);
        return this.card; // works without the this keyword? Do I need it??

    }

    evaluateGuess() { // refactor?
      if (this.guess === this.card.correctAnswer) {
          console.log('true')
          return true;
        } else {
          console.log('false')
          return false;
        }
      }

      giveFeedback() {
        if (this.guess === this.card.correctAnswer) {
            console.log('correct!')
            return 'correct!';
        } else {
            console.log('incorrect!')
            return 'incorrect!';
        }

      }

            
    // if guess is equal to correcAnswer, return true;
    // else return false;

}


module.exports = Turn;





// Your Turn class should meet the following requirements:
// Instantiated with two arguments - a string(that represents a user’s guess to the question), and a Card object for the current card in play.
//     returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.