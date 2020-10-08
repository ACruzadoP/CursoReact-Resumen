import React from "react"

class LifeCycleChild extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    componentDidMount() {
        console.log("Mounted - LCM(componentDidMount)")
    }

    componentDidUpdate (prevProps, prevState) {
        console.log("Did Update - LCM(componentDidUpdate)")
    }

    render () {
        console.log("Render - LCM(render)")
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>
                    Increment!
                </button>
                    &nbsp;&nbsp;
                <button onClick={this.decrement}>
                    Decrement!
                </button>
            </div>
        )
    }
}

export default LifeCycleChild