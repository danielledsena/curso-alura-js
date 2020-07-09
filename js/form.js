var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {  // Quando não faz muito sentido reaproveitar a 
                                                            // função em outros lugares podemos 
                                                            // declará-la na forma anônima. ex.: function () {}
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";//Nesse contexto, o innerHTML apaga as mensagens de erro após 
                                 //o item ser adicionado à lista
                                 
    //Com a propriedade innerHTML, podemos editar obter o conteúdo HTML (HTML interno) de um elemento.
    //Para editar o HTML interno, como o innerHTML é uma propriedade, utilizamos um sinal de igual (=). 
    //Fazemos:
    //ObjetoDeUmElementoHTML.innerHTML = "Novo conteúdo"
    //E para obter o HTML interno, fazemos:
    //ObjetoDeUmElementoHTML.innerHTML
    //O seu retorno será todo o conteúdo HTML, tanto tags, atributos, classes, etc, no formato de uma String.

})

function adicionaPacienteNaTabela(paciente) {
    //Cria a Tr e a Td do paciente
    var pacienteTr = montaTr(paciente);
    //Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //Nesse contexto, o innerHTML evita o acúmulo de mensagens de erro a cada validação
    erros.forEach(function(erro){ //Todo array possui a função forEach(), em JavaScript. Passamos para ela 
                                  //uma função por parâmetro, e nessa função fazemos o que quisermos para cada
                                  //item do array. O item do array é recebido por parâmetro na função interna.
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    //Criando um objeto paciente
    var paciente = {
        nome: form.nome.value, //Não utilizamos o sinal de "=" entre a propriedade e o valor dela em um 
                               //objeto Javascript, e sim o sinal de ":".
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Concatena tudo, colocando os Td's dentro da Tr's
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd (dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("O campo nome deve ser preenchido!");
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido!");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!");
    }
    if (paciente.peso.length == 0) {
        erros.push("O campo peso deve ser preenchido!");
    }
    if (paciente.altura.length == 0) {
        erros.push("O campo altura deve ser preenchido!");
    }
    if (paciente.gordura.length == 0) {
        erros.push("O campo gordura deve ser preenchido!");
    }
    return erros;
}