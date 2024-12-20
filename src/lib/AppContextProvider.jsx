import React, { createContext, useReducer } from "react"

const initialState = {
  productsBySize: [
    {
      size: "S",
      price: 69,
    },
    {
      size: "M",
      price: 79,
    },
    {
      size: "L",
      price: 89,
    },
    {
      size: "XL",
      price: 99,
    },
  ],
  currentBandColor: "indigo",
  productColors: [
    { name: "indigo", hex: "#816BFF" },
    { name: "cyan", hex: "#1FCEC9" },
    { name: "blue", hex: "#4B97D3" },
    { name: "black", hex: "#3B4747" },
  ],
  cart: [],
  total: 0,
}

// 2. Define reducer function
function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case "CHANGE_BAND_COLOR":
      return {
        ...state,
        currentBandColor: action.payload,
      }
    case "GET_TOTAL_PRICE":
      return {
        ...state,
        total: state.cart.reduce((acc, item) => acc + item.price, 0),
      }
    default:
      return state
  }
}

export const AppContext = createContext()

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product })
  }

  const changeBandColor = (color) => {
    dispatch({ type: "CHANGE_BAND_COLOR", payload: color })
  }

  const getTotalPrice = () => {
    dispatch({ type: "GET_TOTAL_PRICE" })
  }

  return (
    <AppContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        changeBandColor,
        getTotalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
