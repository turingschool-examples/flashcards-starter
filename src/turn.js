
const evaluateGuess = (guess, correctAnswer) => {
    if(guess === correctAnswer){
     return true;
    } else {
     return false;
    };
   };
  
   module.exports = {
    evaluateGuess
   }