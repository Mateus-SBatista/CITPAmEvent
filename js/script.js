const form = document.querySelector('#cadastro-form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	let nome = document.querySelector('#nome').value;
	let email = document.querySelector('#email').value;
	let senha = document.querySelector('#senha').value;

	if (nome === '' || email === '' || senha === '') {
		resultado.innerHTML = '<p>Todos os campos são obrigatórios.</p>';
	} else {
		let xhr = new XMLHttpRequest();

		xhr.open('POST', 'cadastro.php', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.onload = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resultado.innerHTML = xhr.responseText;
			}
		};

		xhr.send(`nome=${nome}&email=${email}&senha=${senha}`);
	}

    function validarTermos() {
        var termos = document.getElementById("termos");
        if (!termos.checked) {
          alert("Por favor, leia e concorde com os termos e condições para continuar.");
          return false;
        }
        return true;
      }
});

const selectOcupacao = document.querySelector('#ocupacao');
const precoMatricula = document.querySelector('#preco-matricula');

selectOcupacao.addEventListener('change', () => {
  const ocupacaoSelecionada = selectOcupacao.value;

  switch (ocupacaoSelecionada) {
    case 'aluno':
      precoMatricula.innerText = 'Matrícula R$60';
      break;
    case 'profissional':
      precoMatricula.innerText = 'Matrícula R$180';
      break;
    case 'professor':
      precoMatricula.innerText = 'Matrícula R$120';
      break;
    default:
      precoMatricula.innerText = '';
  }
});