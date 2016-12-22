import React from 'react';
import * as utils from '../utilities';
import Album from './AlbumComponent';
import '../styles/album-page.css';


class ArtistDetailPage extends React.Component{

    constructor(props){
        super(props);
        this.state = { // initialize the state to have an empty array of albums
            albums: []
        };
    }

    //  this function will be invoked immediately after a component is mounted.
    componentDidMount(){ // will execute the function below
        this.fetch_albums();
    }


    fetch_albums() {
        console.log(this.props);
        utils.fetch_data(`/artists/${this.props.routeParams.artistId}/albums`, (data) => { //fetch the data from the Spotify Api and saves it in the data variable
            const items = data.items;
            this.setState({ // setSate sets the data. If the data from the server request callbacks changes setState will be triggered so the data is always up to date.
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