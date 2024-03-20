function startTimer() {
  return Date.now();
}

function endTimer(timer) {
  return Date.now() - timer;
}

function convertTimerToString(timeMS) {
  const displaySeconds = 1000;
  const displayMinutes = displaySeconds * 60;
  const displayHour = displayMinutes * 60;

  let displayString = "";
  if (timeMS < displaySeconds) {
    displayString = "0s";
    return displayString;
  }
  if (timeMS >= displayHour) {
    const hours = (timeMS / displayHour).toFixed(0);
    displayString += `${hours}hr`;
    timeMS = timeMS % displayHour;
  }
  if (timeMS >= displayMinutes) {
    const minutes = (timeMS / displayMinutes).toFixed(0);
    displayString += `${minutes}m`;
    timeMS = timeMS % displayMinutes;
  }
  if (timeMS >= displaySeconds) {
    const seconds = (timeMS / displaySeconds).toFixed(0);
    displayString += `${seconds}s`;
    timeMS = timeMS % displaySeconds;
  }
  return displayString;
}

module.exports = { startTimer, endTimer, convertTimerToString };
