var $ = require('jQuery');
window.$ = $;

$(document).ready(function() { 
  // TODO: API calls
  // TODO: save to a local file
  // TODO: put data to html
  $("#header").html(getHeader());
  $("#content").html(getContent());
  // TODO: set interval for all steps above
});

getData = () => {
  // TODO: read saved preference from local file
  // TODO: make calls to different apis
  // TODO: save data locally
  // TODO: return data
};

setupInterface = () => {
  // TODO: setup header
  // TODO: setup content
  // TODO: setup footer
};

startApp = () => {};

// TODO: set interval