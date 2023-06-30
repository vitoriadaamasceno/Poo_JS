class Animal{
    constructor(nome, idade, raça){
        this.nome = nome
        this.idade = idade
        this.raça = raça
    }

    ChecarTotaldeAnimais(){
        return 10;
    }
}
class Cachorro extends Animal{
    Latir(){
        console.log("Latindo")
    }
}

var dog = new Cachorro("Lua",10,"Viralata");

console.log(dog.ChecarTotaldeAnimais())
dog.Latir()