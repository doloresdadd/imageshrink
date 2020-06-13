const { app, BrowserWindow } = require("electron");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    title: "ImageShrink",
    icon: "./assets/icons/Icon_256x256.png",
  });

  mainWindow.loadFile("./app/index.html");
}

app.on("ready", createMainWindow);
