import React from 'react'
class Counter extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <h2>{this.props.count2}</h2>
                <button
                    onClick={this.props.substractFunction}
                >-</button>
                <button onClick={this.props.addFunction} >+</button>
                
            </div>
        )
    }
}

export default Counter;