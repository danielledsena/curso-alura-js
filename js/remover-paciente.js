var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut"); 
    setTimeout(function(){
        event.target.parentNode.remove();//O parentNode indica o pai ao qual o elemento está vinculado
                                         //Nesse caso = TR = paciente 
    },500);
});


/* var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
}); */

//O pedaço de código acima não contemplava os pacientes adicionados na tabela posteriormente por meio do 
//navegador.

// this = palavra de contexto que indica o elemento ao qual o evento está atrelado.