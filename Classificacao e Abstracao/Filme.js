class Filme {
    //obrigatorio o contrutor
    constructor(){
        //Atributos
        this.titulo = ' '
        this.ano = 0
        this.genero = ''
        this.direitor = []
        this.duracao = 0
    }
    //Metodos
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