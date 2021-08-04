import React from 'react'

class Button extends React.Component {

    constructor() {
        super()
    
        this.state = {
        }
    }
    

    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.children}</button>
            </div>
        )
    }
}

export default Button