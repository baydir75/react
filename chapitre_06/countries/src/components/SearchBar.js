import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             countryName: ""
        }
        this.country = this.country.bind(this)
    }

    country(e) {
        this.setState({
            countryName: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.getCountries(e,this.state.countryName)}>
                    <input type="text" onChange={this.country}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
    
}

export default SearchBar