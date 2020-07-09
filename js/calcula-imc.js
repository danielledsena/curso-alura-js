var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //Diferente do querySelector, o querySelectorAll não
                                                        //puxa apenas o primeiro registro, puxa todos.

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido"); // ou: paciente.style.backgroundColor = "lightcoral";
                                                     // "backgroundColor", e não "background-color",
                                                     // pois correto é usar o padrão camelCase quando estamos 
                                                     // tentando acessar um estilo que possui duas palavras 
                                                     // no CSS.
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso>=0 && peso<1000) {
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if (altura>=0 && altura<=3.00) {
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); // Define o número de casas decimais, arredondando o número.
}