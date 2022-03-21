function infoCar(nome, ano, motor, consc, conse) {
    return {
        nome: nome,
        ano: ano,
        motor: motor,
        consc: consc,
        conse: conse,
        media: function () {
            return (this.consc + this.conse) / 2;
        }
    }
}




var store = [
    infoCar("Astra", 2004, 2.0, 8, 12),
    infoCar("Vectra", 1998, 2.0, 7, 11),
    infoCar("Fluence", 2011, 2.0, 7, 12),
    infoCar("Versa", 2015, 1.6, 10, 16),
    infoCar("Up TSI", 2015, 1.0, 11, 18 ),
]

var modelo = store[3];

console.log(modelo);
console.log(modelo.media());





var num = 3;
for (var i = 1; i < num; i++) {
    console.log("Executando o FOR pela " + i + " vez");
}
console.log("Fim da execução de FOR");





var nume = 1;
while (nume < 5) {
    console.log("Executando WHILE pela " + nume + " vez");
    nume++;
}
console.log("Fim da execução de WHILE");





var palha = ["Tradicional", "Ninho", "Torre"];
for (var doce of palha) {
    console.log(doce)
}




function media(b1, b2, b3, b4) {
    var bim1 = b1;
    var bim2 = b2;
    var bim3 = b3;
    var bim4 = b4;
    var media = (bim1 + bim2 + bim3 + bim4) / 4;
    console.log(media);
}
media(4, 6, 6, 5);

if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}




var med = function (b1, b2, b3, b4) {
    return (b1 + b2 + b3 + b4) / 4;
}
console.log(med(4, 6, 5, 8));

if (med >=6) {
    console.log("Passou de ano");
}else{
    console.log("Reprovou de ano");
}

var carros = ["Gol", "Palio", "Corsa", "Ka", "Uno"];

for(var i in carros){
    console.log(carros[i])
}


// •Para imprimir toda a lista:

// // store.forEach(function(tudo){
// //     console.log(tudo)
// // })

// // ou

// // for(var modelo of store)
// // console.log(modelo);
