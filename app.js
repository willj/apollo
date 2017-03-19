const electron = require('electron');

electron.app.on('ready', function () {
    let mainWindow = new electron.BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('http://localhost:3000');
});