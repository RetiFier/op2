const electron = require("electron");
const { ipcMain, ipcRenderer, remote } = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const nativeImage = require("electron").nativeImage;
const find = require("find-process");
let mainWindow;
var image = nativeImage.createFromPath(__dirname + "/OP2_logo.png");
image.setTemplateImage(true);

function createWindow() {
  mainWindow = new BrowserWindow({
    icon: image,
    transparent: false,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname + "/preload.js"), // <--- (2) Preload script
    },
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  mainWindow.maximize();
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.on("close", function (e) {
    e.preventDefault();
    mainWindow.destroy();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
app.on("will-quit", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("before-quit", () => {
  mainWindow.removeAllListeners("close");
  mainWindow.close();
});
app.on("close", (e) => {
  if (mainWindow) {
    e.preventDefault();
    mainWindow.webContents.send("app-close");
  }
});
// ipcRenderer.on("app-close", (_) => {
//   const resolution = remote.getCurrentWindow().getSize();
//   this.clientConfig.ScreenWidth = resolution[0] || 1024;
//   this.clientConfig.ScreenHeight = resolution[1] || 768;

//   ipcRenderer.send("closed");
// });
app.on("before-quit", (e) => {
  find("port", 3000).then(
    function (list) {
      if (list[0] != null) {
        process.kill(list[0].pid, "SIGHUP");
      }
    }.catch((e) => {
      console.log(e.stack || e);
    })
  );
});
ipcMain.on("closed", (_) => {
  mainWindow = null;
  if (process.platform !== "darwin") {
    app.quit();
  }
});
