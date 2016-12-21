import React from 'react';

class Album extends React.Component {

    render() {
        const album = this.props.album;
        return (
            <div className="album">
                <li>
                    <a href={album.uri}>{album.name}</a>
                </li>
            </div>
        )
    }
}

export default Album