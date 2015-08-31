export formatTime(secs) {
  var minutes = Math.floor(secs / 60);
  minutes = (minutes >= 10) ? minutes : "0" + minutes;
  var seconds = Math.floor(secs % 60);
  seconds = (seconds >= 10) ? seconds : "0" + seconds;
  return minutes + ":" + seconds;
}
