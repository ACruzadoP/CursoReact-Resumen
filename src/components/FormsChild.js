import React from "react"

class FormsChild extends React.Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target

        type === "checkbox" ? 
        this.setState({[name]: checked}) :
        this.setState({[name]: value})
        
    }

    handleSubmit() {
        console.log("Now we should be doing something with the information...")
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.fullName} 
                    name="fullName" 
                    placeholder="Full Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <br />

                {
                    /**
                     * Other useful form elements:
                     * 
                     *  <textarea /> element
                     */
                }
                
                <label>
                    <input 
                        type="checkbox" 
                        checked={this.state.isFriendly}
                        name="isFriendly" 
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br />
                <br />

                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        name="gender" 
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />

                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        name="gender" 
                        onChange={this.handleChange}
                    /> Female
                </label>
                <br />
                <br />

                <label>Favorite Color: </label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>

                <br /><br /><br />
                <button>Submit</button>


            </form>
        )
    }
}

export default FormsChild