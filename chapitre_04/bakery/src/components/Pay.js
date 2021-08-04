import React from 'react'
import Card from './Card'

class Pay extends React.Component {

    constructor() {
        super()
    
        this.state = {
            total: [],
            basket: [],
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(name, price) {
        console.log(name);
        console.log(price);
        
        let ecoTax = (this.state.basket.length + 1) * 0.03

        this.setState(prevState => {
            return {
                ...prevState,
                basket: [...this.state.basket, {
                    name: name,
                    price: price
                }],
                totalEcoTax: ecoTax,
                totalTVA: parseInt(this.state.total)/100*20,
                totalTTC: parseInt(this.state.total) + ecoTax + parseInt(this.state.total)/100*20
            }
        })
    }

    render() {
        this.props.items.map((item) =>
            this.state.total.push(item.itemPrice)
            )
        return (
            <div>
                <h1>Pay</h1>
                <div>
                    {this.props.items.map((item) => 
        <Card onClick={this.handleSelect} price={item.itemPrice} productName={item.itemName}/>
        )}
                    <p>Le total est de: {this.state.total.reduce((a,b) => a + b, 0)}</p>
                    <p>Le total TTc est de: {this.state.totalTTC}</p>
                </div>
                <div>
                    <p>{this.state.totalEcoTax}</p>
                    <p>{this.state.totalTVA}</p>
                    <p>{this.state.totalTTC}</p>
                </div>
            </div>
        )
    }
    
}

export default Pay