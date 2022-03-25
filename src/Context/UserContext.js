import { createContext, useState } from "react";

export const UserContext = createContext();

// TODO Context necista un Provider el cual se encargue de poder
// guardar y retornar la informacion que guardemos en context
export const UserProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) ?? []);

  const storeUser = (dataUser) => {
    localStorage.setItem("user", JSON.stringify(dataUser));
    setUser(dataUser);
  };

  // Vamos  aguardar el objeto de cada producto.
  const storeBasket = (product) => {
    // Basket, sera un array de objetos
    setBasket([...basket, product]);
    localStorage.setItem("basket", JSON.stringify([...basket, product]));
  }

  const deleteElementFromBasket = (id) => {
    const productIndice = basket.findIndex((bas) => bas.id === id);
    const newBasket = basket.splice(productIndice, 1);

    setBasket(newBasket);
    localStorage.setItem("Basket", JSON.stringify(newBasket));
  }

  return (
    <UserContext.Provider value={{ user, storeUser, basket, storeBasket }}>
      {props.children}
    </UserContext.Provider>
  );
};