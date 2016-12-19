import React from 'react';

class User extends React.Component {

    render() {
        const album = this.props.user;
        return (
            <div className="album">
                <h2>album.display_name</h2>
            </div>
        )
    }
}

export default User