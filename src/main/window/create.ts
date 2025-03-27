import path from 'node:path'
import { BrowserWindow, app } from 'electron'
import { options as allWindow } from './options'

export function createWindow(options: Electron.BrowserWindowConstructorOptions, hash: string): BrowserWindow {
  const win = new BrowserWindow({
    ...options,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
    },
  })

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, `../renderer/index.html`), { hash })
  }
  else {
    win.webContents.openDevTools()
    win.loadURL(`http://localhost:${process.env.PORT}/#${hash}`)
  }

  return win
}

let defaultWindow: BrowserWindow | null = null
export function createDefaultWindow(): BrowserWindow {
  if (defaultWindow) return defaultWindow

  defaultWindow = createWindow(allWindow.defaultWin.window, allWindow.defaultWin.hash)

  return defaultWindow
}
