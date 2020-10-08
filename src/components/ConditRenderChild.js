import React from "react"

function handleClick(){
    this.setState(prevState => {
        return {
            isLoggedIn: !prevState.isLoggedIn
        }
    })
}

class ConditRenderChild extends React.Component {
    constructor () {
        super()
        this.state = {
            isLoggedIn: true
        }
        handleClick = handleClick.bind(this)
    }

    isLoggedInOrOut() {
        if (this.state.isLoggedIn) {
            return "Yes"
        } else {
            return "No"
        }
    }

    render () {
        let variable = this.isLoggedInOrOut()
        let cadenaBoton = this.state.isLoggedIn ? "Log Out" : "Log In"

        return (
            <div>
                <h2>Is the user logged in? {variable}</h2>
                <button onClick={handleClick}>{cadenaBoton}</button>
                {this.state.isLoggedIn && <h2>You're logged in! =)</h2>}
            </div>
        )
    }
    
}

export default ConditRenderChild
