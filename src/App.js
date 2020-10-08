import React from "react"
import FirstChild from "./components/FirstChild"
import StylingChild from "./components/StylingChild"
import PropsChild from "./components/PropsChild"
import StateChild from "./components/StateChild"
import LifeCycleChild from "./components/LifeCycleChild"
import ConditRenderChild from "./components/ConditRenderChild"
import FormsChild from "./components/FormsChild"

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
          <h1>----STATE--------------</h1>
          <StateChild />
          <h1>----Life Cycle Methods / Feel free to open the Console and check out how they work--------------</h1>
          <LifeCycleChild />
          <h1>----Conditional Render--------------</h1>
          <ConditRenderChild />
          <h1>----FORMS--------------</h1>
          <FormsChild />
        </div>
    )
}

export default App