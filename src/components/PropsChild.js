import React from "react"

function PropsChild (props) {
    return (
        <div>
            <h2>{props.firstProp}</h2>
            <h2>{props.secondProp}</h2>
        </div>
    )
}

export default PropsChild