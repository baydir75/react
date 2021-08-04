import React from 'react'

class Card extends React.Component {
    constructor() {
        super()
    
        this.state = {
             image: "./images/item.png"
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.onClick(this.props.productName, this.props.price)}><img src={this.state.image} alt="alt"></img></button>
            </div>
        )
    }
}

export default Card