import React from 'react';
import getNested from 'get-nested';

class User extends React.Component {

    render() {
        const user = this.props.user;
        return (
            // getNested() checks if property exists.
            <div className="user">
                <h2>{getNested(() => user.display_name)}</h2>
                <img src={getNested(() => user.images[0].url)}/>
                <br></br>
                <a href={getNested(() => user.external_urls.spotify)}>Go to my profile </a>
            </div>
        )
    }
}

export default User