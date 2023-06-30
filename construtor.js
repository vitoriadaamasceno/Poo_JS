class Filme {
    //obrigatorio o contrutor , ele é uma fução e pode aceitar parametros

    constructor(titulo,ano,genero, direitor, duracao){
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
        this.direitor = direitor
        this.duracao = duracao
    }
    
    Reproduzir(){
        console.log('Reproduzindo...')
    }
    Pausar(){
        console.log('Pausado')
    }
    Avancar(){
        console.log('Avançar >>')
    }
    Fechar(){
        console.log('Fechar x')
    }
}
//Uma copia tem valores propios
var vingadores = new Filme("vingadores",2016, "ação", "um homi", "2h");
console.log(vingadores)


var batman = new Filme();
batman.titulo = "Batman"
batman.ano = "2000"
batman.genero = "fantasia"
console.log(batman.titulo)
console.log(batman.genero)