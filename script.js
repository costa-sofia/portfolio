var texto = document.querySelector(".apresentacao");
var sofia = document.querySelector(".sofia");
var estudante = document.querySelector(".estudante");
var desenvolvedora = document.querySelector(".desenvolvedora");


sofia.addEventListener("click", function(){

            texto.textContent = "sofia";

})

estudante.addEventListener("click", function(){

    texto.textContent = " Sou estudante do curso técnico em Técnologia da Informaçaõ no colégio COTEMIG,fora do curso sempre fui uma apaixonada pela linguagem Java na qual desenvolvo projetos de forma autônoma.";

})

desenvolvedora.addEventListener("click", function(){

    texto.textContent = "desenvolvedora";

})

// mascara telefone
const handlePhone = (event) => 
{
    let input = event.target
    input.value = phoneMask(input.value)
}
  
  const phoneMask = (value) => 
  {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }
// mascara telefone

//mascara  nome
const handleName = (event) => {
  let input = event.target;
  input.value = capitalizeWords(input.value);
}

const capitalizeWords = (value) => {
  if (!value) return "";

  const words = value.split(' ');

  const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
          return word[0].toUpperCase() + word.slice(1);
      }
      return word;
  });

  return capitalizedWords.join(' ');
}


function toggleBrightnessDark() {
  const container = document.querySelector('.svg-container-dark');
  container.classList.toggle('active');

  const body = document.getElementById('body');

  if (body.classList.contains('dark-mode')) {
    // Modo escuro ativado, troque para o modo claro
    body.classList.remove('dark-mode');
    container.querySelector('.bi-moon').style.display = 'none';
    container.querySelector('.bi-moon-stars-fill').style.display = 'inline';
  } else {
    // Modo claro ativado, troque para o modo escuro
    body.classList.add('dark-mode');
    container.querySelector('.bi-moon').style.display = 'inline';
    container.querySelector('.bi-moon-stars-fill').style.display = 'none';
  }
}


