//AJAX - Requisição com o JS de modo assíncrono.

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();
    //O objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript. 
    //Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados além 
    //do XML, este nome só se manteve devido a um legado histórico. E para instanciar um novo Objeto 
    //XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //Dado que temos um XMLHttpRequest, precisamos configurar nossa requisição para dizer para qual servidor 
    //queremos enviá-la e também qual método HTTP devemos usar. Fazemos isto através do método .open(), 
    //passando o método e a url.

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);
            //JSON = JavaScript Object Notation: jeito de poder transportar pela web formatos de dados bastante 
            //parecidos com os objetos do JS. Ele é tão parecido que pode ser convertido facilmente para 
            //objetos do JS (ex.: array).
                
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
             });
        }else{
                
               erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});