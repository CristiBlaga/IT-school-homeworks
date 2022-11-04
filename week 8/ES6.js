const oddOrEven = (a) => (a % 2 === 0 ? "even" : "odd");

const adding = (...numbers) => {
  let total = 0;
  for (let i in numbers) {
    total += numbers[i];
  }
  return total;
};
console.log(adding(3, 5, 8, 4));

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

const { name } = person;

const car = {
  name: "Toyota",
  settings: {
    color: "white",
    doors: 5,
  },
};
//   - Clonati obiect car, pe care-l mergeuim cu modelYear: 2022 si alte settings - wheels, engine
//   - Destructurati color si doors.
//   - Clonati obiectul car
//   - Clonati obiectul person

// const another = Object.assign({ modelYear: 2022, wheels: 4, engine: 4.2 }, car);

// console.log(another);

const anotherCar = { ...car, modelYear: 2022, wheels: 4, engine: "4.2" };
const { color, doors } = car;
const oneMoreCar = { ...car };
const clonedPerson = { ...person };
