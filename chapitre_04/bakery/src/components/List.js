import React from 'react'


class List extends React.Component {

    constructor() {
        super()

        this.state = {

        }

    }




    render() {
        console.log(this.props.items)
        return (
            <div>
                <h1>List</h1>
                <ul>{this.props.items.sort((a, b) => a.itemPrice - b.itemPrice).map((item) =>

                    <li key={item.itemName}>{item.itemName} {item.itemPrice}</li>
                )}</ul>

                <button onClick={this.props.deleteItem}>Delete</button>
            </div>
        )
    }
}

export default List