import { contextBridge, ipcRenderer } from 'electron'

console.log('Hello Preload!')

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  readFile: () => ipcRenderer.invoke('file:readFile'),
})
