import React, {useContext, useEffect} from 'react'
import { AnchorsContext } from "../../context/anchorsContext";

const ParaRegalar = () => {

  const { allAnchors } = useContext(AnchorsContext)

  useEffect(() => {
    const anchorParaRegalar = document.getElementById("paraRegalarContainer")
    allAnchors.push({ name: "PARA REGALAR", anchor: anchorParaRegalar })
}, [])

  return (

    <div id="paraRegalarContainer" className="wrapper">
      <a className="anchor" id="paraRegalar"></a>
      <div className="one">One</div>
      <div className="two">Two</div>
      <div className="three">Three</div>
      <div className="four">Four</div>
      <div className="five">Five</div>
      <div className="six">Six</div>
    </div>

  )
}

export default ParaRegalar