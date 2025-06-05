//Busca um elemneto no HTML e salva em uma variavel
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

// funçao que vai abrir e fechar o menu
function abrirFechaMenu() {

    // Se o me esta fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostra icone X
        iconeX.style.display = "inline"

        //  Esconder o icone barras
        iconeBarras.style.display = "none"

    }

    // senao
    else {
        //Fechar o menu
        menu.classList.add("menu-fechado")

        //Esconder icone X

        iconeX.style.display = "none"


        iconeBarras.style.display = "inline"
    }

}

onresize = () => {

    menu.classList.remove("menu-fechado")
    //mostrar icone X
    iconeX.style.display = "inline"
    //esconder icones barras
    iconeBarras.style.display = "none"
}