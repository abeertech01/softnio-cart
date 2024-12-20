import React, { useContext } from "react"
import { AppContext } from "../lib/AppContextProvider"
import { getImageURL } from "../utils/image-util"

function CartModal() {
  const { state, toggleCartModal } = useContext(AppContext)
  const total = state.cart.reduce((acc, item) => acc + item.qnt * item.price, 0)

  return (
    <div className="absolute z-50 top-0 bottom-0 right-0 left-0 flex items-center justify-center">
      <div
        onClick={toggleCartModal}
        className="absolute z-40 bg-zinc-700/50 w-full h-full"
      ></div>
      <div className="relative z-50 bg-white rounded-lg shadow-lg p-[44px]">
        {/* Header */}
        <h2 className="text-[22px] font-bold mb-6">Your Cart</h2>
        <div className="mb-[1.625rem]">
          <div className="row1 text-gray font-normal flex border-b border-lightGray px-1">
            <div className="w-[278px] flex justify-start items-center">
              Item
            </div>
            <div className="w-[62px] flex justify-center items-center">
              Color
            </div>
            <div className="w-[69px] flex justify-center items-center">
              Size
            </div>
            <div className="w-[59px] flex justify-center items-center">Qnt</div>
            <div className="w-[91px] flex justify-end items-center">Price</div>
          </div>

          {state.cart.map((item, index) => (
            <div
              key={index}
              className="row1 font-normal flex py-[16px] border-b border-lightGray px-1"
            >
              <div className="w-[278px] flex justify-start items-center">
                <img
                  src={getImageURL(item.color)}
                  alt=""
                  className="w-[2.25rem] h-[2.25rem] object-cover rounded-[3px] mr-2"
                />
                <span>Classy Modern Smart watch</span>
              </div>
              <div className="w-[62px] flex justify-center items-center">
                {item.color}
              </div>
              <div className="w-[69px] flex justify-center items-center font-bold">
                {item.size}
              </div>
              <div className="w-[59px] flex justify-center items-center font-bold">
                {item.qnt}
              </div>
              <div className="w-[91px] flex justify-end items-center font-bold">
                ${item.qnt * item.price}.00
              </div>
            </div>
          ))}

          <div className="last-row flex px-1 pt-[28px] text-[1.125rem] font-bold">
            <div className="w-[278px] flex justify-start items-center">
              Total
            </div>
            <div className="w-[62px] flex justify-center items-center"></div>
            <div className="w-[69px] flex justify-center items-center"></div>
            <div className="w-[59px] flex justify-center items-center">
              {state.cart.reduce((acc, item) => acc + item.qnt, 0)}
            </div>
            <div className="w-[91px] flex justify-end items-center">
              ${total}.00
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-x-[1.5rem]">
          <button
            onClick={toggleCartModal}
            className="px-[18px] p-1 border border-lightGray rounded-[3px] text-[13px] font-semibold"
          >
            Continue Shopping
          </button>
          <button
            onClick={toggleCartModal}
            className="w-[94px] h-[36px] bg-purple text-white rounded-[3px] text-[13px] font-semibold"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartModal
