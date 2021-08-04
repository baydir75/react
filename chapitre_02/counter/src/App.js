import React from 'react';
import Counter from './components/Counter'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      count2: 0
    }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter count={this.state.count} addFunction={() => {
          let num = this.state.count;
          let num2 = this.state.count2;
          if (this.state.count < 100) {
            this.setState({ count: num + 1 })
            if (this.state.count === this.state.count2) {
              this.setState({ count2: num2 + 1 })
            }
          }
        }} substractFunction={() => {
          let num = this.state.count;
          if (this.state.count > 0) {
            this.setState({ count: num - 1 })
          }
        }} />
        <Counter count={this.state.count2} addFunction={() => {
          let num = this.state.count2;
          if (this.state.count2 < 100)
            this.setState({ count2: num + 1 })
        }} substractFunction={() => {
          let num = this.state.count2;
          let num2 = this.state.count;
          if (this.state.count2 > 0 && this.state.count2 >= this.state.count) {
            this.setState({ count2: num - 1 })
            if (this.state.count2 === this.state.count) {
              this.setState({ count: num2 - 1 })
            }
          }
        }} />

      </div>
    )
  }
}

export default App;