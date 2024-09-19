var comNameElements = document.getElementsByClassName("computerName")
//document.getElementById('computerName').innerHTML = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
async function func(){
  print(comNameElements)
  print(comNameElements.length)
  var sysInfoBtn = document.getElementById("computerName")
  const response = await window.versions.usernameQuery()
  console.log(sysInfoBtn);
  console.log(response);
  sysInfoBtn.innerHTML= response
}
func()
