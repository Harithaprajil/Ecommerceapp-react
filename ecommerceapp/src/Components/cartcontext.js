import { createContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate(); 


    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);


        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) => cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
         navigate('Cart')
    };
    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart.quantity === 1) {
            deleteFromCart(item)
        } else {
          setCartItems(
            cartItems.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            )
          );
        }
      };
      const deleteFromCart = (item)=>{
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      };
    
    

    useEffect(() => {
        setCartItems([]);
    }, []);
  

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            deleteFromCart,

        }}
        >
            ({ children })
        </CartContext.Provider>
    );
};
