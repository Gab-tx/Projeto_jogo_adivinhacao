// Função para resetar o jogo 
function reset(){
    window.location.reload()} 

// Contador de tentativas  (diminui as tentativas a cada erro) 
contadorTentativas = function(){
    tentativas-=1
if(tentativas > 0){
            document.getElementById('numeroAdvinhacoesRestante').innerHTML = `${tentativas}`
            }
            else{
            document.getElementById('advinhar').disabled = true;
            document.getElementById('numeroAdvinhacoesRestante').innerHTML = `${tentativas}`
            document.getElementById('titulo').innerHTML = `As tentativas acabaram, <strong>você perdeu.</strong> Clique em resetar`
                if(tentativas == 0){
                document.getElementById('reset').disabled = false}
    }
        }

var palpite = 0

// Histórico de palpites (Onde fica os palpites feitos)
historico = function(vencedor=false){
    var listaHistorio = []
    if(vencedor == true){
        document.getElementById('listaHistorico').innerHTML += `<strong id='acerto'>Venceu!</strong></li>`
        listaHistorio = []
        document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
        document.getElementById('reset').disabled = false;
    }  // se venceu, limpa a lista e habilita o botão reset 
    else{
        palpite +=1
        resultado = document.getElementById('numero').value
        listaHistorio.push(resultado)
        for(var i = 0; i < listaHistorio.length; i++){
        document.getElementById('listaHistorico').innerHTML += `<li>${palpite}º - <strong>${listaHistorio[i]}</strong></li>`   
        }
        
        document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
    }
} 


// Lógica do jogo 
var tentativas = 10
document.getElementById('numeroAdvinhacoesRestante').innerHTML = tentativas
document.getElementById('reset').disabled = true

var numeroAleatorio = Math.floor(Math.random() * 100) + 1
//console.log(numeroAleatorio)

document.getElementById('advinhar').addEventListener('click', function(){

var numeroInput = document.getElementById('numero').value

if(numeroInput == numeroAleatorio){
    tentativas -=1;
    document.getElementById('advinhar').disabled = true
    document.getElementById('numero').disabled = true
    document.getElementById('numeroAdvinhacoesRestante').innerHTML = tentativas
    document.getElementById('resultado').innerHTML = `<strong id='acerto'>Acertou!</strong>`
    historico(vencedor=true)
} // se acertou, desabilita o botão advinhar e o input, mostra mensagem de acerto e chama a função historico com vencedor=true 

else if(numeroInput <1 || numeroInput> 100){
    alert('Digite um número entre 1 e 100');
    document.getElementById("numero").value = "";
    document.getElementById("numero").focus();

}

// se a diferença for maior ou igual a 50, dá a dica de "bem maior" ou "bem menor" 
else if(numeroAleatorio - numeroInput >= 50){
    contadorTentativas();
    historico();
    document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
    return document.getElementById('resultado').innerHTML = `<strong id='erro'>Errou!</strong><br> O número misterioso é <strong id='str'> bem maior</strong>`
} 
else if(numeroInput - numeroAleatorio >= 50){
    contadorTentativas();
    historico();
    document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
    return document.getElementById('resultado').innerHTML = `<strong id='erro'>Errou!</strong><br> O número misterioso é <strong id='str'> bem menor</strong>`
}

// se o número misterioso for múltiplo de 5, dá a dica de "maior/menor e múltiplo de 5"

else if(numeroAleatorio > numeroInput && numeroAleatorio %5 == 0){
    contadorTentativas();
    historico();
    document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
    return document.getElementById('resultado').innerHTML = `<strong id='erro'>Errou!</strong> O número misterioso é <strong id='str'> maior e multiplo de 5</strong>`
}
else if(numeroAleatorio < numeroInput && numeroAleatorio %5 == 0){
    contadorTentativas();
    historico();
    document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
    return document.getElementById('resultado').innerHTML = `<strong id='erro'>Errou!</strong> O número misterioso é <strong id='str'> menor e multiplo de 5</strong>`
}

// dicas de maior/menor e par/ímpar 
else if(numeroInput > numeroAleatorio && numeroAleatorio%2 !=0){
    contadorTentativas();
    historico();
    return document.getElementById('resultado').innerHTML = `<strong id='erro'>Errou!</strong> O número misterioso é <strong id='str'>menor e ímpar</strong>`
}
else if(numeroInput > numeroAleatorio && numeroAleatorio %2 == 0){
    contadorTentativas();
    historico();
    return document.getElementById('resultado').innerHTML = `<strong id='erro'>Errou!</strong> O número misterioso é <strong id='str'>menor e par</strong>`
}

else if(numeroInput < numeroAleatorio && numeroAleatorio %2 == 0){
    contadorTentativas();
    historico();
    document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
    return document.getElementById('resultado').innerHTML = `<strong id='erro'>Errou!</strong> O número misterioso é <strong id='str'>maior e par</strong>`
}
else if(numeroInput < numeroAleatorio && numeroAleatorio%2 != 0){
    contadorTentativas();
    historico();
    document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
    return document.getElementById('resultado').innerHTML = `<strong id='erro'>Errou!</strong> O número misterioso é <strong id='str'>maior e ímpar</strong>`
}
}
)// fim do evento do botão advinhar 




