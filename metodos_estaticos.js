//Metodos Estaticos : permite acessar metodos de uma classe sem criar um objeto antes.
//A palavra chave static define um método estático para a classe. Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.

class Calculadora {

    static Somar(a, b) {
        console.log(a + b)
    }
    static Subtrair(a, b) {
        console.log(a - b)
    }

}
//INSTANCIANDO

Calculadora.Somar(10,2)
Calculadora.Subtrair(20,10)
