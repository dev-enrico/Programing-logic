/*
        
        Enunciado do Exercício5:

        Crie um programa que receba uma temperatura em celsius e 
        que, ao serem enviados, retornem no console a temperatura 
        em celsius anterior convertida para fahrenheit

        O programa abaixo responde no console corretamente
        de duas formas, colocando a temperatura em celsius
        e selecionando enviar ou colocando o nome da função 
        abaixo e entre parênteses os número em celsius que 
        queremos operar:

        Exemplo:

        celsiusparafahrenheit(10);

 */
        celsiusparafahrenheit(numeroemcelsius);
        function celsiusparafahrenheit(celsius)
    {
        var celsius = parseInt(document.querySelector('#graucel').value);
        var fahrenheit1 = celsius * 1.8
        var fahrenheit2 = fahrenheit1 + 32
        console.log(celsius + '° Celsius equivalem a ' + fahrenheit2 + '° em Fahrenheit');
    }