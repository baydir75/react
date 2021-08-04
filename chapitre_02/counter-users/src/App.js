import React from 'react'
import UserInfo from './components/UserInfo';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 10
    }
  }



render() {
  return (
    <div>
      <UserInfo count={this.state.count}/>
    </div>
  )
}

}

export default App