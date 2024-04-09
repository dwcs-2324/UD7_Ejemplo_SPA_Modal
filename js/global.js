
const BASE_URL = "http://localhost:3000/controller/FrontController.php";

window.onload = onceLoaded;


function onceLoaded() {

    console.debug("window loaded");
    document.querySelector('#formLogin').onsubmit = confirmLoginJSON;
    
    getRoles();
}

