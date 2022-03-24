/**
 * @desc electron 主入口
 */
const path = require("path");
const fs = require("fs");
const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const { postDb, getDb } = require("../src/util/file");

const filePath = app.getAppPath();
const dataPath = filePath + "/data/";

ipcMain.on("read-data-path", function () {});

// 初始化项目配置文件
ipcMain.on("async-write-file", async function (event, arg) {
  fs.mkdir(dataPath + arg, function (e) {
    if (e) {
      fs.mkdir(dataPath, function (e) {
        console.log(e);
      });
    }
    fs.mkdir(dataPath + arg, function (e) {
      postDb(dataPath + arg + "/setting.json", {
        preview: "",
        settings: {},
      });
    });
  });
});

ipcMain.handle("load-settings", async (event, args) => {
  const settings = await getDb(dataPath + args + "/setting.json");
  return settings;
});

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minHeight: 600,
    minWidth: 1200,
    autoHideMenuBar: isDev ? false : true,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      preload: path.resolve(__dirname, "preload.js"),
    },
    icon: path.join(__dirname, "../public/favicon.ico"),
  });

  if (isDev) {
    mainWindow.loadURL(`http://127.0.0.1:3000`);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, "../dist/index.html")}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
