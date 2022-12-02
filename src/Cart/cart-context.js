import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Cart/cart-reducer'

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("MyCart");
    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
  };

const initialState = {
    cart: getLocalCartData(),
    total_item: '',
    total_price: '',
    shipping_fee:  50,
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart = (id, size, amount, product) => {
      dispatch({type: 'ADD_TO_CART', payload: {id, size, amount, product}})
      alert('Item added to cart.')
    }
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    };
    const setIncrement = (id) => {
      dispatch({ type: "SET_INCREMENT", payload: id });
    };
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
      };

    useEffect(() => {
        dispatch({type: 'CART_ITEM_PRICE_TOTAL'})
        localStorage.setItem('MyCart', JSON.stringify(state.cart))
    }, [state.cart]) 
  
    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrement}}>{children}</CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext};
