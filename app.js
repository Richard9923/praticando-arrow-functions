/* criar uma funcao para receber o input do usuarioi */
function input() {
  const escolhendoOpcao = prompt(
    `Escolha uma das opções descritas na página sobre o que você deseja fazer.`
  );
  return escolhendoOpcao;
}
/* criar uma funcao para verificar o tipo de input que o usuario teve 
e fazer algo de acordo com as instruções do programa */

function rodandoApp(inputUsuario) {
  if (inputUsuario == "nova") {
    const adicionandoTarefa = prompt(`Qual tarefa você quer adicionar? `);
    listaTarefas["tarefas"].push(adicionandoTarefa);
    const horario = prompt(`Qual horário você vai fazer a tarefa? `);
    listaTarefas["horarios"].push(horario);
    console.log(
      `Tarefa: ${adicionandoTarefa}. Adicionada com sucesso! Para o horário: ${horario}.`
    );
  } else if (inputUsuario == "lista") {
    for (let i = 0; i < listaTarefas.tarefas.length; i++) {
      console.log(`Tarefa: ${i}: ${listaTarefas.tarefas[i]}.`);
      console.log(`Horario: ${listaTarefas.horarios[i]}.`);
    }
  } else if (inputUsuario == "deletar") {
    const escolhendoQualTarefa = parseInt(
      prompt(`Escolha o index da tarefa que você quer deletar.`)
    );
    listaTarefas.tarefas.splice(escolhendoQualTarefa, 1);
    console.log("Tarefa deletada.");
  } else if (inputUsuario == "sair") {
    programaOn = false;
    console.log(`Programa encerrado.`);
  }
}

let programaOn = true;
const listaTarefas = {
  tarefas: [],
  horarios: [],
};

while (programaOn == true) {
  let inputUsuario = input();
  rodandoApp(inputUsuario);
}
