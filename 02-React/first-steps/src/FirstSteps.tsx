import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Xbox One", quantity: 1 },
  { productName: "PC Gamer", quantity: 3 },
  { productName: "Play Station 5", quantity: 2 },
  { productName: "Switch 2", quantity: 7 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} Name={productName} quantity={quantity} />
      ))}



      {/* <ItemCounter Name="Xbox One" quantity={11} />
      <ItemCounter Name="Nintendo" quantity={5} />
      <ItemCounter Name="PS4" quantity={3} /> */}
      {/* <h1>hola mundo</h1>
      <p>Esto es un parrafo</p>
      <button> Click me</button>
      <div>
        <h2> hola</h2>
      </div> */}
    </>
  );
}
