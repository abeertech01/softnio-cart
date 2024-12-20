import React, { useContext } from "react"
import { getImageURL } from "../utils/image-util"
import { AppContext } from "../lib/AppContextProvider"

function BandImg() {
  const { state } = useContext(AppContext)

  return (
    <div className="min-w-[39.375rem] min-h-[45rem]">
      <img
        src={getImageURL(state.currentBandColor)}
        alt="band picture"
        className="w-full h-full object-cover rounded"
      />
    </div>
  )
}

export default BandImg
