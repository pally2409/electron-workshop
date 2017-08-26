console.log('testing 123')
// const app = require('electron').app
const {app, BrowserWindow} = require("electron")

app.on('ready', () => {
  const mainWindow = new BrowserWindow({})
  const file = 'file://' + __dirname + '/index.html'
  mainWindow.loadURL(file)
  mainWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault()
    console.log(url)
    
    mainWindow.webContents.send('open-file', url.slice(7))
  })
})
