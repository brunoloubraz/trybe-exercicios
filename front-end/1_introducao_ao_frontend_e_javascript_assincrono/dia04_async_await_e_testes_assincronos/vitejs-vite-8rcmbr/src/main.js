const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');
import Swal from 'sweetalert2'


buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    preEl.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    return Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }
}
