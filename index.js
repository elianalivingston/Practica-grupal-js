function C({ ram = "", cpu = "", disco = "", gpu = false }) {
  this.ram = ram;
  this.cpu = cpu;
  this.disco = disco;
  this.gpu = gpu;
}

const computadoras = [];

for (let i = 1; i < 5; i++) {
  computadoras.push(
    new C({
      ram: "ram " + i,
      cpu: "cpu " + i,
      disco: "disco " + i,
      gpu: i % 2 === 0,
    })
  );
}

computadoras.forEach((el) => {
  const detalle = Object.entries(el)
    .map((c) => c[0] + ":" + c[1])
    .join(" ");
  console.log(detalle);
});

// 3
const computadorasConGpu = computadoras.filter((c) => c.gpu);

// 4

const nafta = (km) => {
  return km * 0.02;
};

const priceNafta = (km, price) => {
  const c = nafta(km);

  return c * price;
};

console.log(priceNafta(50, 10));

// 5
const arrayNumbers = [];

for (let i = 1; i < 100; i++) {
  arrayNumbers.push(i);
}

const arrayPorDos = arrayNumbers.map((el) => el * 2);

console.log(arrayPorDos);

// 5

const array1al10 = [];

for (let i = 1; i <= 10; i++) {
  array1al10.push(i);
}

console.log(array1al10);

// 6
const mayoresA5 = array1al10.filter((el) => el > 5);
console.log(mayoresA5);

// 7
const mayorA10 = array1al10.find((el) => el > 10);

console.log(mayorA10);

// 8
let pokemones = [
  { nombre: "pikachu", poder: 12 },
  { nombre: "bulbasaur", poder: 6 },
  { nombre: "charizard", poder: 19 },
  { nombre: "squirtle", poder: 3 },
  { nombre: "metwo", poder: 6 },
];

const pokemonesMenoresA10 = pokemones.filter((el) => el.poder < 10);

console.log(pokemonesMenoresA10);
