const { app, BrowserWindow } = require("electron");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    title: "ImageShrink",
  });
}

app.on("ready", createMainWindow);
