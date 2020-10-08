import React from "react"
import FirstChild from "./components/FirstChild"
import StylingChild from "./components/StylingChild"
import PropsChild from "./components/PropsChild"

function App () {
    return (
        <div>
          <h1>----Parent/Child Components--------------</h1>
          <FirstChild />
          <h1>----Styling with CSS--------------</h1>
          <StylingChild />
          <h1>----PROPS--------------</h1>
          <PropsChild 
              firstProp={"Primer prop de la primera llamada"}
              secondProp={"Segundo prop de la primera llamada"}
          />
          <PropsChild 
              firstProp={"Primer prop de la segunda llamada"}
              secondProp={"Segundo prop de la segunda llamada"}
          />
        </div>
    )
}

export default App