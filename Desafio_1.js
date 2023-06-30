
//Desafio 1 :Crie uma classe para criar um dado eletronico, que apresente numeros aleatorio de acordo com o numero de faces informada
class Dado {
    //obrigatorio o contrutor , ele é uma função e pode aceitar parametros

    constructor(faces) {
        this.faces = faces

    }

    Rodar() {
        var numero = Math.floor(this.faces * Math.random() + 1)
        console.log(numero)
    }
}

var dado = new Dado(6)
dado.Rodar()