import React from 'react'
class UserInfo extends React.Component {
    render() {
        return (
            
            <div>
                <p>Nom : {this.props.name}</p>
                <p>Website : {this.props.website}</p>
                <p>Email : {this.props.email}</p>
            </div>
        )
    }
}

export default UserInfo;