let alunos = [];

function calcularMedia(notas) {
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
  return Math.round(soma / notas.length);
}

function avaliarDesempenho(media) {
  if (media >= 7) {
    return 'Aprovado';
  } else if (media >= 5) {
    return 'Em recuperação';
  } else {
    return 'Reprovado';
  }
}

while (true) {
  let opcao = parseInt(
    prompt(
      'Escolha uma opção:\n1. Cadastrar Aluno\n2. Cadastrar Notas\n3. Exibir Boletim\n4. Sair'
    )
  );

  switch (opcao) {
    case 1:
      // Cadastrar Aluno
      let nome = prompt('Digite o nome do aluno:');
      alunos.push({ nome: nome, notas: [] });
      alert('Aluno cadastrado com sucesso.');
      break;

    case 2:
      // Cadastrar Notas
      let nomeParaNotas = prompt('Digite o nome do aluno para inserir notas:');
      let aluno = alunos.find((aluno) => aluno.nome === nomeParaNotas);

      if (!aluno) {
        alert('Aluno não encontrado.');
      } else {
        for (let i = 0; i < 3; i++) {
          let nota = parseFloat(prompt(`Digite a nota ${i + 1} do aluno:`));
          aluno.notas.push(Math.round(nota));
        }
        alert('Notas cadastradas com sucesso.');
      }
      break;

    case 3:
      // Exibir Boletim
      let nomeParaBoletim = prompt('Digite o nome do aluno para exibir o boletim:');
      let alunoBoletim = alunos.find((aluno) => aluno.nome === nomeParaBoletim);

      if (!alunoBoletim) {
        alert('Aluno não encontrado.');
      } else {
        let media = calcularMedia(alunoBoletim.notas);
        let desempenho = avaliarDesempenho(media);
        alert(
          `Boletim:\nNome: ${alunoBoletim.nome}\nNotas: ${alunoBoletim.notas.join(
            ', '
          )}\nMédia: ${media}\nStatus: ${desempenho}`
        );
      }
      break;

    case 4:
      // Sair
      alert('Saindo do sistema...');
      exit(0);

    default:
      alert('Opção inválida.');
      break;
  }
}