import React from 'react';
import {Link} from 'react-router';

class Artist extends React.Component{
    render(){
        const artist = this.props.artist;
        return(
            <div>
                <Link to={`artist/${artist.id}`}>{artist.name}</Link>
            </div>
        )
    }
}

export default Artist;