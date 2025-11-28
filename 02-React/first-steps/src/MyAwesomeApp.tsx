import type { CSSProperties } from "react";

export function MyAwesomeApp() {
  const FirtsName = "Lino Ruben";
  const LastName = "Reyna";

  const myStyles: CSSProperties = {
    backgroundColor: "#c2cbf1ff",
    fontSize: "40px",
    color: "blue",
    padding:'10px',
  };

  return (
    <>
      <h1 style={myStyles}>{FirtsName}</h1>
      <h3 style={myStyles}>{LastName}</h3>
    </>
  );
}
