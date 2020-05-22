

// Seleciona os pacientes
let pacientes = document.querySelectorAll('.paciente');
let corpoTabela = document.querySelector('tbody');
let form = document.querySelector('form');

// Percorre o array de pacientes
for(i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    // Seleciona peso, altura e imc
    let tdAltura = paciente.querySelector('.altura');
    let tdPeso = paciente.querySelector('.peso');
    let tdImc = paciente.querySelector('.imc');

    let altura = tdAltura.textContent;
    let peso = tdPeso.textContent ;
    
    let imc = calculaImc(peso, altura);

    if (imc <= 18.5) {
        tdImc.classList.add('bg-danger');
    } else if (imc > 18.5 && imc <= 25 ){
        tdImc.classList.add('bg-info');
    } else {
        tdImc.classList.add('bg-warning');
    }
    tdImc.textContent = imc;
    
}

function calculaImc(peso, altura) {
    let imc;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


// Evento do botao
let botao = document.getElementById('botao');

botao.addEventListener('click', adicionaRow);

function adicionaRow(evento) {
    
    evento.preventDefault();

    let nomeInput = document.querySelector('#nomeInput');
    let alturaInput = document.querySelector('#alturaInput')
    let pesoInput = document.querySelector('#pesoInput');

    let nome = nomeInput.value;
    let altura = alturaInput.value;
    let peso = pesoInput.value;

    let imc = calculaImc(peso, altura);

    console.log(nome, altura, peso, calculaImc(peso, altura));

    // Cria tds
    let thNome = document.createElement('th');
    thNome.innerText = nome;
    thNome.scope = 'row';
    thNome.classList.add('nome');
    
    let tdAltura = document.createElement('td');
    tdAltura.innerText = altura;
    tdAltura.classList.add('altura');

    let tdPeso = document.createElement('td');
    tdPeso.innerText = peso;
    tdPeso.classList.add('peso');

    let tdImc = document.createElement('td');
    tdImc.innerText = imc;

    if (imc <= 18.5) {
        tdImc.classList.add('bg-danger');
    } else if (imc > 18.5 && imc <= 25 ){
        tdImc.classList.add('bg-info');
    } else {
        tdImc.classList.add('bg-warning');
    }
    tdPeso.classList.add('imc');

    let tr = document.createElement('tr');
    tr.className = 'paciente';

    tr.appendChild(thNome);
    tr.appendChild(tdAltura);
    tr.appendChild(tdPeso);
    tr.appendChild(tdImc);
    corpoTabela.appendChild(tr);

    form.reset();
}