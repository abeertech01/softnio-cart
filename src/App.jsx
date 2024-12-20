import React from "react"
import ProductPage from "./component/ProductPage"
import AppContextProvider from "./lib/AppContextProvider"

function App() {
  return (
    <AppContextProvider>
      <div className="min-h-screen min-w-screen flex justify-center items-center text-primary">
        <ProductPage />
      </div>
    </AppContextProvider>
  )
}

export default App
