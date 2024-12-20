import React, { useContext, useState } from "react"
import filledStar from "../assets/icons/star-fill.svg"
import halfFilledStar from "../assets/icons/star-half-fill.svg"
import star from "../assets/icons/star.svg"
import { AppContext } from "../lib/AppContextProvider"

function BandInfo() {
  const { state, changeBandColor, addToCart } = useContext(AppContext)
  const [selectedProduct, setSelectedProduct] = useState(
    state.productsBySize[1]
  )
  const [selectedColor, setSelectedColor] = useState(
    state.productColors[0].name
  )
  const [qnt, setQnt] = useState(0)

  const bandColorSelecting = (prodColName) => {
    setSelectedColor(prodColName)
    changeBandColor(prodColName)
  }

  const bandSizeSelecting = (bandSize) => {
    const product = state.productsBySize.find(
      (product) => product.size === bandSize
    )
    setSelectedProduct(product)
  }

  const addingToCart = () => {
    if (qnt > 0) {
      console.log(qnt)
      const product = {
        qnt,
        color: selectedColor,
        size: selectedProduct.size,
        price: selectedProduct.price,
      }

      addToCart(product)
    }

    setQnt(0)
  }

  return (
    <div className="flex flex-col items-start justify-center">
      <h1 className="text-[2.5rem] font-bold leading-[2.75rem] -tracking-[1.25px] mb-3">
        Classy Modern Smart watch
      </h1>
      <div className="review flex text-sm text-gray mb-[1.6875rem]">
        <div className="flex gap-x-[4.5px] mr-2">
          <img src={filledStar} alt="" />
          <img src={filledStar} alt="" />
          <img src={filledStar} alt="" />
          <img src={halfFilledStar} alt="" />
          <img src={star} alt="" />
        </div>
        (2 Reviews)
      </div>

      {/* Price */}
      <div className="band-price text-[1.25rem] leading-[1.875rem] mb-[1.25rem]">
        <span className="line-through text-gray">$99</span>{" "}
        <span className="text-indigo font-bold">
          ${selectedProduct.price}.00
        </span>
      </div>

      {/* Content */}
      <div className="content text-gray text-[1.125rem] leading-[1.875rem] mb-[1.25rem]">
        I must explain to you how all this mistaken idea of denoun cing ple
        praising pain was born and I will give you a complete account of the
        system, and expound the actual teaching.
      </div>

      {/* Product Specification */}
      <div className="prod-spec flex gap-x-[2.6875rem] mb-[1.25rem]">
        <div>
          <span className="block font-normal text-gray text-sm">Type</span>
          <span className="block text-primary font-bold text-base">Watch</span>
        </div>
        <div>
          <span className="block font-normal text-gray text-sm">
            Model Number
          </span>
          <span className="block text-primary font-bold text-base">
            Forerunner 290XT
          </span>
        </div>
      </div>

      {/* Select Band color */}
      <div className="band-color mb-[1.25rem]">
        <h1 className="font-bold text-[1.125rem]">Band Color</h1>
        <div className="flex gap-x-[1.125rem] mt-2">
          {state.productColors.map((prodCol) => (
            <label key={prodCol.hex} className="relative cursor-pointer">
              <input
                type="radio"
                name="band-color"
                value={prodCol.name}
                checked={prodCol.name === selectedColor}
                onChange={() => bandColorSelecting(prodCol.name)}
                className="hidden"
              />
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  outlineColor:
                    prodCol.name === selectedColor
                      ? prodCol.hex
                      : "transparent",
                  outlineWidth: "2px",
                  outlineOffset: "2px",
                  outlineStyle: "solid",
                  backgroundColor: prodCol.hex,
                }}
              ></div>
            </label>
          ))}
        </div>
      </div>

      {/* Select Band Size */}
      <div className="bandSize mb-[1.25rem]">
        <h1 className="font-bold text-[1.125rem]">Wrist Size</h1>
        <div className="flex gap-x-3 mt-2">
          {state.productsBySize.map((prodSize) => (
            <label key={prodSize.size} className="relative cursor-pointer">
              <input
                type="radio"
                name="band-color"
                value={prodSize.size}
                checked={prodSize.size === selectedProduct.size}
                onChange={() => bandSizeSelecting(prodSize.size)}
                className="hidden"
              />

              <div
                className="w-[4.5625rem] h-[2.25rem] border border-lightGray rounded-[3px] flex justify-center items-center"
                style={{
                  borderColor:
                    prodSize.size === selectedProduct.size
                      ? "#6576FF"
                      : "#dbdfea",
                }}
              >
                <div className="text-sm">
                  <span
                    className="font-bold"
                    style={{
                      color:
                        prodSize.size === selectedProduct.size
                          ? "#6576FF"
                          : "#364A63",
                    }}
                  >
                    {prodSize.size}
                  </span>{" "}
                  <span className="text-gray font-light">
                    ${prodSize.price}
                  </span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="add-to-cart flex gap-x-3">
        <div className="border border-lightGray rounded-[3px] flex">
          <button
            onClick={() => qnt > 0 && setQnt(qnt - 1)}
            className="w-[2.25rem] text-gray"
          >
            -
          </button>
          <span className="w-[3.75rem] border-r border-l border-lightGray flex justify-center items-center">
            {qnt}
          </span>
          <button
            onClick={() => setQnt(qnt + 1)}
            className="w-[2.25rem] text-gray"
          >
            +
          </button>
        </div>
        <button
          onClick={addingToCart}
          className="bg-indigo text-white text-sm font-bold px-6 py-3 rounded-[3px]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default BandInfo
