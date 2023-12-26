import React from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import CartWidget from './componentes/CartWidget';
function App() {
  const itemCount = 3;
  const greetingMessage = "Bienvenido a nuestra tienda de café";
  return (
    <div>
      <NavBar />
        <CartWidget itemCount={itemCount} />
      <ItemListContainer greeting={greetingMessage} />
    </div>
  );
}

export default App;
