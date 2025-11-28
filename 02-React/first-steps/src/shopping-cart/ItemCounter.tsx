import { useState } from "react";
import "./ItemCounter.css";

interface Props {
  Name: string;
  quantity: number | undefined;
}
export const ItemCounter = ({ Name, quantity = 0 }: Props) => {
  // const handleClick = () => {
  //   console.log(`click en ${Name}`);
  // };

  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    if (count === 10) return;
    setCount(count + 1);
  };
  const handleSubstract = () => {
    if (count === 1) return;
    setCount(count - 1); 
  };
  return (
    <section
      className="item-row"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: "10px",
      //   marginTop: "10px",
      // }}
    >
      <span className="Item-text"> {Name}</span>

      <button
        onClick={handleAdd}
        // onMouseEnter={() => {
        //   console.log("mouse enter");
        // }}
        // onClick={() => {
        //   handleClick();
        // }}
      >
        + 1
      </button>

      <span>{count}</span>
      <button onClick={handleSubstract}>- 1</button>
    </section>
  );
};
