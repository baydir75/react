import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.countryInfo.name}
                {this.props.countryInfo.capital}
                <img src={this.props.countryInfo.flag}></img>
                {this.props.countryInfo.population}
                {this.props.countryInfo.region}
            </div>
        )
    }

}

export default Card