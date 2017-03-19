const electron = require('electron');
const menu = require('./apollo/menu');

electron.app.on('ready', function () {
    let mainWindow = new electron.BrowserWindow({width: 1200, height: 800});
    mainWindow.loadURL('http://localhost:3000');
});