const sysInfoBtn = document.getElementById('computerName')
//document.getElementById('computerName').innerHTML = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
async function func(){
  const response = await JSON.parse(window.versions.ping())
  console.log(response) // prints out 'pong'
  //document.getElementById('computerName').innerHTML= response
}
func()
