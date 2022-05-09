const { ipcRenderer } = require("electron");

ipcRenderer.on('version', (e, text) =>{
    document.getElementById('version_id').innerHTML = text;
});

// function Getversion(){

// }