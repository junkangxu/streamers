var $ = require('jQuery');
window.$ = $;

$(document).ready(function() {
  startApp();
});

getData = () => {
  // TODO: read saved preference from local file
  // TODO: make calls to different apis
  // TODO: save data locally
  // TODO: return data
};

setupInterface = () => {
  // $("#header").html(getHeader());
  getContent().then(content => $("#content").html(content));
};

startApp = () => setupInterface();

setInterval(setupInterface, 60000);