
        var n1 = parseInt(prompt("Digite o primeiro numero: "));
        var n2 = parseInt(prompt("Digite o segundo numero: "));
        var n3 = parseInt(prompt("Digite o terceiro numero: "));
        var n4 = parseInt(prompt("Digite o quarto numero: "));
        var n5 = parseInt(prompt("Digite o quinto numero: "));


        var array = [n1, n2, n3, n4, n5];

    
        var soma = 0;
        for (let i = 0; i < array.length; i++) {
            soma += array[i];
        }

    
        document.write("Os números digitados são: ");
        for (let i = 0; i < array.length; i++) {
            document.write(array[i]);
            if (i < array.length - 1) {
                document.write(", ");
            }
        }
        document.write("<br>A soma de todos os números é: " + soma);
   

