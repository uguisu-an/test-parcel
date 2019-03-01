import path from 'path';
import { BrowserWindow, app } from 'electron';

let win: BrowserWindow | null;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
    }
  });
  win.on('closed', () => {
    win = null;
  });
  win.loadFile(path.resolve(__dirname, 'index.html'));
  win.webContents.openDevTools();
});

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    return;
  }
  app.quit();
});
