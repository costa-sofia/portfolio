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


