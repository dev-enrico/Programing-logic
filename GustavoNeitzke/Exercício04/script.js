/*
        
        Enunciado do Exercício4:

        Crie um programa que receba 2 números e que, ao serem enviados, 
        retornem no console o resultado das 4 operações básicas da 
        matemática envolvendo os dois números que o usuário nos deu
        inicialmente.

        O programa abaixo responde no console corretamente
        de duas formas, colocando os valores e selecionando enviar
        ou colocando o nome da função abaixo e entre parênteses os
        números que queremos operar:

        Exemplo:

        quatrooperacoes(10, 20);

 */
quatrooperacoes(numerosparaoperar);
function quatrooperacoes(numero1, numero2)
    {
        var numero1 = parseInt(document.querySelector('#valor1').value);
        var numero2 = parseInt(document.querySelector('#valor2').value);
        var soma = numero1 + numero2;
        var subtracao = numero1 - numero2;
        var multiplicacao = numero1 * numero2;
        var divisao = numero1 / numero2;
        console.log('Soma: ' + soma);
        console.log('Subtração: ' + subtracao);
        console.log('Multiplicação: ' + multiplicacao);
        console.log('Divisão: ' + divisao);
    }