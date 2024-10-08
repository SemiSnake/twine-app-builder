const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  usernameQuery: () => ipcRenderer.invoke('usernameQuery'),
  quitQuery: () => ipcRenderer.invoke('quitQuery')
  // we can also expose variables, not just functions
})