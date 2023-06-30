//Class é uma forma, e o objeto é o bolo podendo ter diversos sabores.
//Objeto é algo concreto que se tira de uma class.
class Filme {
    //obrigatorio o contrutor , podendo ter parametros tambem
    constructor() {
        this.titulo = ' '
        this.ano = 0
        this.genero = ''
        this.direitor = []
        this.duracao = 0
    }

    Reproduzir() {
        console.log('Reproduzindo...')
    }
    Pausar() {
        console.log('Pausado')
    }
    Avancar() {
        console.log('Avançar >>')
    }
    Fechar() {
        console.log('Fechar x')
    }
}
//INSTANCIANDO OS ATRIBUTOS
//Uma copia tem valores propios
var vingadores = new Filme();
vingadores.titulo = "Os vingadores"
vingadores.ano = "2001"
vingadores.genero = "Açao"
console.log(vingadores.titulo)
console.log(vingadores.genero)
console.log(vingadores)
var batman = new Filme();
batman.titulo = "Batman"
batman.ano = "2000"
batman.genero = "fantasia"
console.log(batman.titulo)
console.log(batman.genero)
vingadores.Reproduzir()