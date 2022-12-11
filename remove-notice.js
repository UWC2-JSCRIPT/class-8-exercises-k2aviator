const maintenanceNotice = document.querySelector('div#maintenance-notice')
console.log(maintenanceNotice)

function removeNotice (){
    console.log("Notice removed")
    maintenanceNotice.style.display="none"
    //maintenanceNotice.remove();

}
setTimeout(removeNotice, 5000)
