import path from 'path';
import { app, BrowserWindow } from 'electron';

let win;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.on('closed', () => {
    win = null;
  });
  win.loadFile(path.resolve(__dirname, 'index.html'));
});

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') { return; }
  app.quit();
});
