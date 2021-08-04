import React from 'react';
import users from './users';
import UserInfo from './components/UserInfo';

const usersI = users.map((user) => 
  <div>

    <UserInfo website={user.website} name={user.name} email={user.email}/>
    
    </div> );

class App extends React.Component {

  render() {
    return (
      <div>
        {usersI}
      </div>
    )
  }
}

export default App;