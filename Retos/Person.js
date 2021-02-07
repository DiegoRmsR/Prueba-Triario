/**
 * class Person
 * parameters: nombre, edad, sexo, peso, altura, RFC
 */
class Person {
  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }
  /**
  * method that calculates the IMC
  */
  calcularIMC() {
    const peso = this.peso;
    const altura = this.altura;
    return (peso / altura * altura)
  }
}
const IMC = new Person("diego andres ramos ruiz", 20, "M", 68, 1.70).calcularIMC()
console.log(IMC);
