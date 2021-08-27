const { app, BrowserWindow, } = require('electron');

function createWindow() {
    let width = 1000;
    let height = 380;

    win = new BrowserWindow({
        width,
        height,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            backgroundThrottling: false,
	    autoHideMenuBar: true
        }
    });
    win.loadFile('index.html');
    win.setMenuBarVisibility(false)
}



app.whenReady().then(() => {
    createWindow()
})