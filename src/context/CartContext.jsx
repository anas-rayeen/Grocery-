import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });


    const increaseQuantity = (id) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(
            cartItems
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const removeItem = (id) => {
        setCartItems(
            cartItems.filter(item => item.id !== id)
        );
    };


    useEffect(() => {
        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                increaseQuantity,
                decreaseQuantity,
                removeItem
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;