function getCurrentTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  return `${hour}:${minute}`;
}
