class Comida {
    //obrigatorio o contrutor 
    constructor(){
        this.origem = ' '
        this.preço = 0
        this.ingredientes = ''
        this.nome = []
        this.tipo = 0
    }
    
    Escolher(){
        console.log('Escolhido...')
    }
    Pedir(){
        console.log('Pedido Realizado')
    }
    Pagar(){
        console.log('Pagamento feito!')
    }
}