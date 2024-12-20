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
  currentBandColor: "purple",
  productColors: [
    { name: "purple", hex: "#816BFF" },
    { name: "cyan", hex: "#1FCEC9" },
    { name: "blue", hex: "#4B97D3" },
    { name: "black", hex: "#3B4747" },
  ],
  cart: [],
  isCartModalOpen: false,
}

// 2. Define reducer function
function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case "INCREMENT_QNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.color === action.payload.color &&
          item.size === action.payload.size
            ? { ...item, qnt: item.qnt + action.payload.qnt }
            : item
        ),
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
    case "TOGGLE_CART_MODAL":
      return {
        ...state,
        isCartModalOpen: !state.isCartModalOpen,
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

  const toggleCartModal = () => {
    dispatch({ type: "TOGGLE_CART_MODAL" })
  }

  const incrementQnt = (product) => {
    dispatch({ type: "INCREMENT_QNT", payload: product })
  }

  return (
    <AppContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        changeBandColor,
        toggleCartModal,
        incrementQnt,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
