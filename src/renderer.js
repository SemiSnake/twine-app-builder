var comNameElements = document.getElementsByClassName("computerName")
//document.getElementById('computerName').innerHTML = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
async function func(){
  console.log(comNameElements)
  for (let i of comNameElements) {
    console.log(i)
    var sysInfoBtn = i
    const response = await window.versions.usernameQuery()
    console.log(sysInfoBtn);
    console.log(response);
    i.innerHTML= response
  }
}
func()
if(document.getElementsByClassName("closeApplication").length = 1){
  setTimeout(() => {window.versions.quitQuery(); }, 12000);
}