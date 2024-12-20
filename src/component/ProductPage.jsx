import React, { useContext } from "react"
import BandImg from "./BandImg"
import BandInfo from "./BandInfo"
import { AppContext } from "../lib/AppContextProvider"
import CartModal from "./CartModal"

function ProductPage() {
  const { state } = useContext(AppContext)
  return (
    <div className="flex gap-x-[3.75rem] max-w-[82.5rem]">
      <CartModal />
      <BandImg />
      <BandInfo />
      {state.cart.length > 0 && (
        <button className="fixed bottom-4 left-1/2 -translate-x-[50%] w-[139px] h-[42px] bg-[#f2c94c] rounded-full shadow-md hover:bg-[#e0b73a] transition duration-200 ">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base font-medium text-[#2c3e50]">
            Checkout
          </span>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white w-6 h-6 rounded flex items-center justify-center text-sm font-medium text-[#2c3e50] shadow">
            {state.cart.reduce((acc, item) => acc + item.qnt, 0)}
          </span>
        </button>
      )}
    </div>
  )
}

export default ProductPage
