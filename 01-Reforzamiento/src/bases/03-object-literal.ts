interface Person {
  fisrtName: string;
  lastName: string;
  age: number;
  address?: address;
}

interface address {
  postalCode: string;
  city: string;
}

const ironman: Person = {
  fisrtName: "Ruben",
  lastName: "Reyna",
  age: 24,
  address: {
    postalCode: "25115",
    city: "Saltillo",
  },
};

console.log(ironman);
