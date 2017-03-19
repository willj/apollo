const electron = require('electron');

const menu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Open Folder',
                click: (menuItem, browserWindow, event) => {
                    electron.dialog.showOpenDialog(browserWindow, {
                        properties: ['openDirectory']
                    }, (fileNames) => {
                        browserWindow.webContents.executeJavaScript('directoryChanged("' + fileNames[0] +'")');
                    });
                },
                accelerator: 'CommandOrControl+O'
            },
            {
                type: 'separator'
            },
            {
                role: 'toggledevtools'
            },
            {
                type: 'separator'
            },
            {
                role: 'quit'
            }
        ]
    }
];

module.exports = (() => {
    electron.Menu.setApplicationMenu(electron.Menu.buildFromTemplate(menu));
})();