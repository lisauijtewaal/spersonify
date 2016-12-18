import React from 'react';

class Album extends React.Component {

    render() {
        const album = this.props.album;
        return (
            <div className="album">
                <h3>Album</h3>
                <li>
                    <a href={album.uri}>{album.name}</a>
                </li>
            </div>
        )
    }
}

export default Album