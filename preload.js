const { contextBridge } = require('electron');
const os = require("os");
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
})
contextBridge.exposeInMainWorld('os', {
    hostname: () => os.hostname,
  })