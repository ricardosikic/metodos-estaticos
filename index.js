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


class Auto {
   constructor(brand, year, doors) {
     this.on = false;
     this.brand = brand;
     this.year = year;
     this.doors = doors || 4;
   }

   static turningOn() {
     setTimeout(() => {
       this.on = true;
       let alert = '';
       this.on ? alert = 'on' : '';
       console.log(`car is ${alert}`);
     }, 3000);
   }
}

// Lo que se ve aca es que el metodo de la clase se define como estatico por lo que no hay necesidad de instaciar un objeto para poder acceder a el. 

console.log(Auto.turningOn());