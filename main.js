// function tocaSomPom () {
//     document.querySelector('#som_tecla_pom').play();
// }
// function tocaSomClap () {
//     document.querySelector('#som_tecla_clap').play();
// }

// document.querySelector('.tecla_pom');

// document.querySelector('.tecla_pom').onclick = tocaSomPom;


function tocaSom (seletorDeAudio) {
    const elemento = document.querySelector(seletorDeAudio);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento invalido')
    };
}
const listaDeTeclas =  document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  
    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio)
    };

    tecla.onkeydown = function (evento) {

        if(evento.code === "Space"|| evento.code === "Enter"){
        tecla.classList.add ('ativa')
        }
    };

    tecla.onkeyup = function (evento) {
        if(evento.code === "Space"|| evento.code === "Enter" ){
        tecla.classList.remove ('ativa')
        }
    };
    // console.log(idAudio);
    // console.log(contador);
};
