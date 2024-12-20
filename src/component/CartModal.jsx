import React from "react"

function CartModal() {
  return (
    <div className="absolute z-50 top-0 bottom-0 right-0 left-0 bg-zinc-700/50 flex items-center justify-center">
      <div className="w-[651px] h-[480px] bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

        {/* Items Container */}
        <div className="space-y-4 mb-8">
          {/* Item 1 */}
          <div className="flex items-center">
            <img
              src="/path/to/black_watch.jpg"
              alt="Black Watch"
              className="w-16 h-16 mr-4 rounded"
            />{" "}
            {/* Replace with your image path */}
            <div className="flex-grow">
              <p>Classy Modern Smart watch</p>
            </div>
            <div className="text-gray-600 mr-4">Black</div>
            <div className="text-gray-600 mr-4">XL</div>
            <div className="text-gray-600 mr-4">1</div>
            <div>$99.00</div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center">
            <img
              src="/path/to/purple_watch.jpg"
              alt="Purple Watch"
              className="w-16 h-16 mr-4 rounded"
            />{" "}
            {/* Replace with your image path */}
            <div className="flex-grow">
              <p>Classy Modern Smart watch</p>
            </div>
            <div className="text-gray-600 mr-4">Purple</div>
            <div className="text-gray-600 mr-4">L</div>
            <div className="text-gray-600 mr-4">2</div>
            <div>$178.00</div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center">
            <img
              src="/path/to/cyan_watch.jpg"
              alt="Cyan Watch"
              className="w-16 h-16 mr-4 rounded"
            />{" "}
            {/* Replace with your image path */}
            <div className="flex-grow">
              <p>Classy Modern Smart watch</p>
            </div>
            <div className="text-gray-600 mr-4">Cyan</div>
            <div className="text-gray-600 mr-4">M</div>
            <div className="text-gray-600 mr-4">1</div>
            <div>$79.00</div>
          </div>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between border-t pt-4 border-gray-300 mb-8">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">4</span>
          <span className="font-semibold">$356.00</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="text-gray-600">Continue Shopping</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartModal
