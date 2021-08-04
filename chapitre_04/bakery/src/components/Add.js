
import React from 'react'


class Add extends React.Component {

    constructor() {
        super()

        this.state = {
            productName: "",
            price: 1
        }

        this.updateProductName = this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
    }

    updateProductName(e) {
        this.setState(prevState => {
            return {
                ...prevState,
                productName: e.target.value
            }
        })
    }

    updatePrice(e) {
        this.setState(prevState => {
            return {
                ...prevState,
                price: parseInt(e.target.value)
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Add</h1>
                <input type="text" onChange={this.updateProductName} />
                <input type="range" min={1} steps={1} value={this.state.price} max={10} onChange={this.updatePrice} />
                <button onClick={() => this.props.addItem(this.state.productName, this.state.price)}>Add</button>
            </div>
        )
    }
}

export default Add