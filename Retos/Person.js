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
  /**
  * method that obtains the RFC with name, age and sex
  */
  obtenerRFC() {
    const nombre = this.nombre;
    const edad = this.edad;
    const sexo = this.sexo;
    const name = nombre.toUpperCase().split(' ');
    const RFC = name[2].substr(0, 2) + name[3].substr(0, 1) + edad + sexo
    this.rfc = RFC
    return RFC
  }
  /**
  * method that verifies if is legal age
  */
  esMayorDeEdad() {
    if (this.edad >= 18) {
      return true;
    }
    return false;
  }
}
const IMC = new Person("diego andres ramos ruiz", 20, "M", 68, 1.70).calcularIMC()
console.log(IMC);

const esMayorDeEdad = new Person("diego andres ramos ruiz", 20, "M", 68, 1.70).esMayorDeEdad()
console.log(esMayorDeEdad);

const RFC = new Person("diego andres ramos ruiz", 20, "M", 68, 1.70).obtenerRFC()
console.log(RFC);