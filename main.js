const electron = require('electron');
const app = electron.app;
const menubar = require('menubar');

let autoLaunch = true;

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // On macOS, it is common for applications and their menubar
  // to stay active until the user quits explicitly with cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

var mb = menubar({
  width: 300,
  height: 480,
  resizable: false,
  showDockIcon: false
});



mb.on('ready', () => {
  console.log('App is ready');
});