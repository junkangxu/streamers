var menubar = require('menubar');
var mb = menubar({
  width: 280,
  height: 480,
  resizable: false,
  showDockIcon: false
});

mb.on('ready', () => {
  console.log('App is ready');
});