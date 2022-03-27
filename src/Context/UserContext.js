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
    // Vamos a darle la propiedad quantity a lo que es product
    product.quantity = 1;
    setBasket([...basket, product]);
    localStorage.setItem("basket", JSON.stringify([...basket, product]));
  }

  const deleteElementFromBasket = (id) => {
    const products = basket.filter((bas) => bas.id !== id);
    setBasket(products);
    localStorage.setItem("basket", JSON.stringify(products));
  }

  const addOrRemoveProduct = (id, add) => {
    // EL id nos servira para poder encontrar el producto
    // add es bool por si add es true suma sino resta
    const products = basket.map((product) => {
      if (product.id === id) {
        if (add) {
          product.quantity += 1;
        } else {
          if (product.quantity > 1) {
            product.quantity -= 1;
          }
        }
      }
      // por ende despues del if el elemento quantity ha sido alterado
      return {
        ...product,
      };
    });
    setBasket(products);
    localStorage.setItem("basket", JSON.stringify(products));
  };

  return (
    <UserContext.Provider value={{ user, storeUser, basket, storeBasket, deleteElementFromBasket, addOrRemoveProduct }}>
      {props.children}
    </UserContext.Provider>
  );
};