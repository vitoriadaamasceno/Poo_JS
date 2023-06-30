
//Classes gerais que podem ser usadas em outras classes
class Leitor{
    Ler(){
        console.log( "Lido")
    }
}

class Escritor{
    Escrever() {
        console.log("Escrito")
    }
}

class Criador{
    Criar() {
        console.log("Arquivo Criado")
    }
}

class Destruidor{
    Deletar() {
        console.log("Deletando arquivo")
    }
}
//Manipulador de Arquivos
class ManipuladordeArquivos {
    constructor(nome) {
        this.nome = nome
        this.leitor = new Leitor()
        this.escritor = new Escritor()
        this.criador = new Criador()
        this.destruidor = new Destruidor()
    }
}

//Instanciando
var manipulador = new ManipuladordeArquivos("meuarquivo.txt")

manipulador.leitor.Ler()
manipulador.escritor.Escrever()


//Gerenciador de Usuarios
class GerenciadordeUsuarios {
    constructor() {
        this.escritor = new Escritor()
        this.criador = new Criador()
    }
    SalvaListaDeUsuarios(lista) {
        this.criador.Criar("usuario.txt")
        this.escritor.Escrever("usuario.txt", lista)
    }

}

//Instanciando
var usuario = new GerenciadordeUsuarios()

usuario.SalvaListaDeUsuarios(["maria", "vitoria"])