const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'Correct!'
    } else {
    return 'Incorrect!';
    }; 
  };

module.exports = {
  evaluateGuess
};


   