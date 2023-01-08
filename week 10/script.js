//Creati cate 2 exemple pentru mostenire si compozitie folosindu-va de domeniul vostru de activitate sau unul preferat. (puteti folosi orice referinta).

//Inheritance example 1:

class Workshop {
  constructor(name) {
    this.name = name;
  }
  fix() {
    console.log(this.name + " gets the machines ready");
  }
}

class Human extends Workshop {
  constructor(name) {
    super(name);
  }
}
const mechanic = new Human("Cristi");

mechanic.fix();

//Composition example :

const start = (atributes) => ({
  start: () => console.log("Engine has started for " + atributes.name),
});

const drive = (atributes) => ({
  drive: () =>
    console.log((atributes.speed = "Current km/h is " + atributes.speed)),
});

const sportsCar = (name) => {
  let atributes = {
    name,
    speed: 100,
    oilTemperature: 60,
  };
  return Object.assign({}, start(atributes), drive(atributes));
};

const car = sportsCar("BMW");
car.start();
car.drive();

//Creati cate o de functie si apelarea sa pentru urmatoarele cazuri (pentru a intelege):cate o functie care primeste cate un parametru: integer, string, object, array, callback

const myFunction = (int, str, obj, arr, callback) => {
  console.log("Integer is: " + int);
  console.log("String is: " + str);
  console.log("Object is: " + JSON.stringify(obj));
  console.log("Array is: " + arr);

  callback();
};

myFunction(
  10,
  "Parameters example",
  { bike: "KTM" },
  [10, 9, 8, 7, 6, 5, 4],
  function () {
    console.log("Call back function parameter called");
  }
);

//o functie care accepta un numar nedefinit de argumente care returneaza suma lor

const sum = (...arguments) => {
  let sumResult = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumResult += arguments[i];
  }
  console.log(sumResult);
};

sum(7, 2, 13, 3, 5);
sum(1, 2, 3);

//o functie care accepta un boolean si retuneaza un promise, resolve  cu o valoare daca booleanul este true si rejected daca este false cu alta valoare, prindeti ce returneaza functia si afisati cu console.log valoarea

const booleanFunction = (value) => {
  return new Promise((resolve, reject) => {
    if (value) {
      resolve("The boolean is value is true");
    } else {
      reject("The boolean value is false.");
    }
  });
};

booleanFunction(true)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

booleanFunction(false)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
