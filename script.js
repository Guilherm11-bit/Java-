//Selecione os elemetos de DOM que serão manipulados 
const botao = document.getElementById("botaoInteragir")
const mensagem = document.getElementById("mensagem")

//Adicione um evento de clique no botão 
botao.addEventListener("click", () => {
   // solicita o nome usuário
    let nome = prompt("Qual é o seu nome?")

   //Condição para verificar se nome foifornecido
   if(nome) {
    //solicita a idade de usuário
      let idade=prompt("Qual é a sua idade?");

      //condição para ver se sua idade é um número válido 
      if (isNaN(idade)|| idade <= 0 ) {   
        mensagem.innerText= "Por favor, insira uma idade válida.;-;";
        mensagem.style.color="red";  //Altera a cor da mensagem
      } else{
       //Saída de dadosde dados com base na idade fornecida
            if (idade < 18) {
                mensagem.innerText = `Olá, ${nome}! Você tem apenas ${idade} anos.`;
                mensagem.style.color = "blue";  // Altera a cor do texto para azul
            } else {
                mensagem.innerText = `Olá, ${nome}! Você é maior de idade com ${idade} anos.`;
                mensagem.style.color = "green";  // Altera a cor do texto para verde
            }
            console.log(`Nome do usuário: ${nome}`);
            console.log(`Idade do usuário: ${idade}`);
        }
    } else {
        mensagem.innerText = "Nome não fornecido. Por favor, insira um nome.";
        mensagem.style.color = "orange";  // Altera a cor do texto para laranja
    }
 });