// Una de las particularidades de los metodos estaticos en Js es que estos pueden ser llamados sin la necesidad de instaciar la clase, ejemplo.

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email || 'no email';
  }

  static method_one() {
    console.log(`this is a static method`);
  }
}

console.log(User.method_one());

// los metodos estaticos son usados para implementar funciones que pertenecen a una clase pero no a un objeto en particular.
