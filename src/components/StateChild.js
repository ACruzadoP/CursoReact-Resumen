import React from "react"

function handleClick_1(){
    this.setState(prevState => {
        return {
            primera: prevState.primera*2
        }
    })
}
function handleClick_1_restart(){
    this.setState(
        {primera: 5}
    )
}
function handleClick_2(){
    this.setState(prevState => {
        let variable_segunda
        if (prevState.segunda === true){
            variable_segunda=false
        }else{
            variable_segunda=true
        }
        return {
            segunda: variable_segunda
        }
    })
}

class StateChild extends React.Component {
    constructor() {
        super()
        this.state = {
            primera: 5,
            segunda: false
        }
        handleClick_1 = handleClick_1.bind(this)
        handleClick_1_restart = handleClick_1_restart.bind(this)
        handleClick_2 = handleClick_2.bind(this)
    }

    determinarSegunda() {
        if (this.state.segunda) {
            return "Sí"
        } else {
            return "No"
        }
    }

    render () {
        let variable = this.determinarSegunda()
        return (
            <div>
                <h2>Primera variable de tipo state: {this.state.primera}</h2>
                <button onClick={handleClick_1}>Multiplicar por 2</button>
                    &nbsp;&nbsp;
                <button onClick={handleClick_1_restart}>Reiniciar</button>
                <h2>Segunda variable de tipo state: {variable}</h2>
                <button onClick={handleClick_2}>Cambiar</button>
            </div>
        )
    }
}


export default StateChild