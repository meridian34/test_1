export const formatTime = timeInSeconds => {
    let seconds = (timeInSeconds % 60);
    let minutes = (timeInSeconds - seconds) / 60;
  
    let parsedSeconds = seconds < 10 ? '0'+seconds : seconds;
    let parsedMinutes = minutes < 10 ? '0'+minutes : minutes;
  
    return parsedMinutes + ' : ' + parsedSeconds;
   }