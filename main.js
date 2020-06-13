const { app, BrowserWindow, Menu, globalShortcut } = require("electron");

// set environment
process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV !== "production" ? true : false;
const isMac = process.platform === "darwin" ? true : false;

let mainWindow;
let aboutWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    title: "ImageShrink",
    icon: `${__dirname}./assets/icons/Icon_256x256.png`,
    resizable: isDev ? true : false,
    backgroundColor: "white",
  });

  mainWindow.loadFile("./app/index.html");
}

function createAboutWindow() {
  aboutWindow = new BrowserWindow({
    width: 300,
    height: 300,
    title: " About ImageShrink",
    icon: `${__dirname}./assets/icons/Icon_256x256.png`,
    resizable: false,
    backgroundColor: "white",
  });

  aboutWindow.loadFile("./app/about.html");
}

app.on("ready", () => {
  createMainWindow();
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  mainWindow.on("closed", () => (mainWindow = null));
});

const menu = [
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  {
    role: "fileMenu",
  },
  ...(!isMac
    ? [
        {
          label: "Help",
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  ...(isDev
    ? [
        {
          label: "Developer",
          submenu: [
            { role: "reload" },
            { role: "forcereload" },
            { type: "separator" },
            { role: "toggleDevTools" },
          ],
        },
      ]
    : []),
];
