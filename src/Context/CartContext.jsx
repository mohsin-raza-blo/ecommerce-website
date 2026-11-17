import { createContext, useContext, useState, useEffect } from "react";

const CartContent = createContext();

function useMyContent() {
  return useContext(CartContent);
}

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems")
    return savedCart ? JSON.parse(savedCart) : []
  })
  
  const [count, setCunt] = useState()

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => {
      return item.id === product.id;
    });

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ?
            { ...item, quantity: item.quantity + 1 }
            :
            item
        )
      )
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 }
      ])
    }
  }
  const increment = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ?
          { ...item, quantity: item.quantity + 1 }
          :
          item
      )
    )
  }
  const decrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ?
          { ...item, quantity: item.quantity - 1 }
          :
          item
      )
    )
  }
  const removeCartItems = (id) => {
    console.log('remove fun called', id)
    const filterCartItems = cartItems.filter(item => {
      return item.id !== id
    })
    setCartItems(filterCartItems)
  }
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContent.Provider value={{ cartItems, setCartItems, addToCart, increment, decrement, removeCartItems }}>
      {children}
    </CartContent.Provider>
  );
};

export { CartContent, useMyContent, CartProvider }