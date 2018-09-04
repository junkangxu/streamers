var $ = require('jQuery');
window.$ = $;
require('popper.js');
require('bootstrap');

function getHeader() {
  // TODO: get last updated time
  // var lastUpdatedTime = getLastUpdatedTime();
  var lastUpdatedTime = "17:03";
  var text = `Last Updated at ${lastUpdatedTime}`;
  return `<br>${text}</br>`;
}
