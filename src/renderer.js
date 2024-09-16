const sysInfoBtn = document.getElementById('computerName')
document.getElementById('computerName').innerHTML = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
console.log("Js loaded")