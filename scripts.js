const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaLista = []


function adicionarTarefa() {
    minhaLista.push({
        tarefa: input.value,
        concluida: false,
    })


    input.value = ''


    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaLista.forEach((item, posicao) => {
        novaLi = novaLi +
            `
           <li class="task ${item.concluida && "done"}">

          <img class src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
          </li>   
   
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaLista))

}


function concluirTarefa(posicao) {
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida

    mostrarTarefas()

}

function deletarItem(posicao) {
    minhaLista.splice(posicao, 1)
    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasLocaldoStorage = localStorage.getItem('lista')

    if (tarefasLocaldoStorage) {
        minhaLista = JSON.parse(tarefasLocaldoStorage)
    }

    mostrarTarefas()
}

recarregarTarefas()

button.addEventListener('click', adicionarTarefa)