function greet(name: string) {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => {
  return `Hola ${name}`;
};

const message2 = greet2(`chuy`);

const message = greet(`goku`);

console.log(message);
console.log(message2);

const tarea = () => {
  return {
    uid: "XTLR54556",
    username: "Vicente",
  };
};

const urs = tarea();

console.log(urs);
