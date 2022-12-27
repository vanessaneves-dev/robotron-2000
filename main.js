
const controle = document.querySelectorAll('[data-controle]');


controle.forEach((element) => {
  element.addEventListener('click', (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
  })
})

console.log(controle);


console.log()
function manipulaDados(operacao, controle) {
  const peca = controle.querySelector('[data-contador]')
  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}