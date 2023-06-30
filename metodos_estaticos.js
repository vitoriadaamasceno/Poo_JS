//Metodos Estaticos : permite acessar metodos de uma classe sem criar um objeto antes.

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