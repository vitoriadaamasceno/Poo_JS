class Carro {
    //obrigatorio o contrutor 
    constructor(){
        this.modelo = ' '
        this.ano = 0
        this.cor = ''
        this.km_rodados = []
        this.motor = 0
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