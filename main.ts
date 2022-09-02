const electron = require("electron");
const { app, BrowserWindow } = electron;

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        icon: __dirname + '/media/pages.png',
        show: false,
    });
    mainWindow.once("ready-to-show", () => mainWindow.show())

    mainWindow.setTitle("My sites");
    mainWindow.loadURL("https://my-sites-vitorkoch.vercel.app/")

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});
