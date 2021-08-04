import React from 'react'
import Button from './components/Button'
import Card from './components/Card'
import SearchBar from './components/SearchBar'


class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       name: "",
       capital: "",
       flag: "",
       population: "",
       region: ""
    }

    this.getCountries = this.getCountries.bind(this)
  }

  getCountries(e, country) {
    e.preventDefault()
    fetch( `http://localhost:8000/${country}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        name: data.name,
        capital: data.capital,
        flag: data.flag,
        population: data.population,
        region: data.region
      })
    })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {/* <Button onClick={this.getCountries}>France</Button>
        <Button onClick={this.getCountries}>Croatia</Button>
        <Button onClick={this.getCountries}>Brazil</Button> */}
        <SearchBar getCountries={this.getCountries}/>
        <Card countryInfo={this.state}/>
      </div>
    )
  }
}

export default App;
