let menuVisible = false;

//funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Oculta el menu una vez se seleciona
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//Funcion dinamismo skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("Git");
        habilidades[4].classList.add("excel");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("proactivo");
        habilidades[8].classList.add("responsable");
        habilidades[9].classList.add("proyect");
    }
}


//detectar scrollinf para aplicar animacion skills
window.onscroll = function(){
    efectoHabilidades();
}
