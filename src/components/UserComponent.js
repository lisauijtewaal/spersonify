import React from 'react';

class User extends React.Component {

    render() {
        const user = this.props.user;
        return (
            <div className="user">
                <h2>{user.display_name}</h2>
                <img src={user.images[0].url} />
                <br></br>
                <a href={user.external_urls.spotify}>Go to my profile </a>
            </div>
        )
    }
}

export default User