import React from 'react';
import * as utils from '../utilities';
import Album from './AlbumComponent';
import '../styles/album-page.css';


class ArtistDetailPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            albums: []
        };
    }

    componentDidMount(){
        this.fetch_albums();
    }


    fetch_albums() {
        console.log(this.props);
        utils.fetch_data(`/artists/${this.props.routeParams.artistId}/albums`, (data) => {
            const items = data.items;
            this.setState({
                albums: items
            });
        })
    }

    render(){
        const albums = this.state.albums.map(album => {
            return <Album key={album.id} album={album}/>;
        });

        return (
            <div>
                <h1>SPersonify</h1>
                <p>Click on the album and you will be redirected to Spotify.</p>
                <div className="all-albums">
                    {albums}
                </div>
            </div>
        );
    };

}



export default ArtistDetailPage;