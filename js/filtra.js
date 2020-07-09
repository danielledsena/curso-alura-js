var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            //Filtrando com expressão regular
            var expressao = new RegExp(this.value,"i"); //Criando uma regex.
            //O primeiro parâmetro que devemos passar para o construtor é o padrão (o texto da expressão 
            //regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando 
            //como queremos que a expressão regular busque). Por exemplo, podemos definir que não queremos 
            //que haja distinção entre letras maiúsculas e minúsculas, através da flag i.

            //Outra opção é usar a função substring, que recebe dois parâmetros. O primeiro parâmetro é o 
            //início, começando do 0 (que representa o primeiro caractere). O segundo parâmetro define o fim.
            //Nesse caso não temos distinção entre letras maiúsculas e minúsculas, mas para contornar isso, 
            //antes de compará-las, podemos colocar as duas strings em letras minúsculas, para efetuar a 
            //comparação entre elas em seguida:

            /* var comparavel = nome.substr(0, this.value.length);
            var comparavelMinusculo = comparavel.toLowerCase();
            var valorDigitadoMinusculo = this.value.toLowerCase();

            if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
                paciente.classList.add("invisivel");
            } else{
                paciente.classList.remove("invisivel");
            } */

            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");           
        }    
    }
});