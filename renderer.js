const spanId = "computerName"
//document.getElementById('computerName').innerHTML = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
async function func(){
  var sysInfoBtn = document.getElementById(id)
  const response = await window.versions.usernameQuery()
  console.log(sysInfoBtn);
  console.log(response);
  sysInfoBtn.innerHTML= response
}
func()
