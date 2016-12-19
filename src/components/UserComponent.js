import React from 'react';

class User extends React.Component {

    render() {
        const user = this.props.user;
        return (
            <div className="user">
                <h2>{user.display_name}</h2>
            </div>
        )
    }
}

export default User