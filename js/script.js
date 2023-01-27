
let valores = document.querySelectorAll(".valor");
let botao = document.getElementById('submit');
let principal = document.getElementById('principal');
let resultado = document.getElementById('resultado');
let avaliacao = document.getElementById('avaliacao');

function submit(){
    
}

for (let i = 0; i < valores.length; i++){
    valores[i].addEventListener('click', () => {
        let valor = valores[i].innerHTML;

        for (let i = 0; i < valores.length; i++) {
            valores[i].classList.contains('selected')
            valores[i].classList.remove('selected');
        }
        valores[i].classList.add('selected');

        botao.addEventListener('click', () => {
            principal.style.display = "none";
            resultado.style.display = "inline-block";
            avaliacao.innerHTML = valor;
        })
    })
}