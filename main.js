const { app, BrowserWindow } = require('electron');


function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        // icon: path.join(__dirname, 'assets', 'img', 'icon.png'),
        title: 'Update Test',
    });

    win.setTitle('Update Test');
    win.loadFile('src/html/index.html');
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
        win.webContents.send('version', '1.0.0');
    }
});