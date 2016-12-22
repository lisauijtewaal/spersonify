import React from 'react';
import * as utils from '../utilities';
import Artist from './ArtistComponent';
import '../styles/home-page.css';
import Genre from './GenreComponent';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // initialize the state to have an empty array of artists and genres
            artists: [],
            genres: []
        };
    }

    //  this function will be invoked immediately after a component is mounted.
    componentDidMount() { // will execute both functions below
        this.get_hash();
        this.fetch_artists();
    }


    fetch_artists() {
        utils.fetch_authorized_data("/me/top/artists", (data) => { //fetch the data from the Spotify Api and saves it in the data variable
            const top_genres = this.get_top_genres(data.items); // Get top genres from artists in Spotify response
            this.setState({ // setSate sets the data. If the data from the server request callbacks changes setState will be triggered so the data is always up to date.
                artists: data.items,  // Save the generated data in the empty objects
                genres: top_genres
            })

        });
    }

    get_top_genres(artists) {
        const music_genres = {};
        artists.forEach((artist) => { // Loop through artists
            artist.genres.forEach((genre) => { // Loop through genres per artist
                if (!music_genres.hasOwnProperty(genre)) { // Add genre (e.g. dance) with value 0, when not existing
                    music_genres[genre] = 0;
                }
                music_genres[genre]++; // Increment genre (e.g. dance) count with 1
            });
        });
        const genres_array = []; // New array to add each genre from the genres object to
        for (let genre in music_genres) { // Loop through genres object
            genres_array.push({ // Push new object into genres_array with genre (e.g. dance) as property 'name' and count as property 'value'
                name: genre,
                value: music_genres[genre]
            });
        }
        genres_array.sort((a, b) => { // Sort genres_array descending
            if (a.value > b.value) {
                return -1;
            }
            if (a.value < b.value) {
                return 1;
            }
            return 0;
        });
        genres_array.splice(5); // Get first 5 items of genres_array as top genres
        return genres_array; // Return genres_array
    }


    get_hash() {
        if (location.href.includes("access_token")) {
            const hash = window.location.hash;
            let d = new Date();
            d.setHours(d.getHours() + 1);
            document.cookie = "access_token= " + (hash.split("&"))[0].slice(14) + "; expires = " + d.toUTCString() + "; path=/";
            location.hash = '';
        }
    }


    render() {
        const artists = this.state.artists.map(artist => { // creates a new array with the results of calling a function for every array element.
            return <Artist key={artist.id} artist={artist}/>;    // return Artist Component
        });

        const genres = this.state.genres.map(genre => {
            return <Genre key={genre.name} genre={genre}/>;
        });

        return (
            <div className="homepage-container">
                <h1>SPersonify</h1>
                <div className ="artist-widget">
                    <h2> TOP 10 ARTIST </h2>
                    <p> These are your favorite artist. To see the top best of their albums click on the artist.</p>
                    <div className="all-artists">
                    {artists}
                    </div>
                </div>
                <div className ="genres-widget">
                        <h2> TOP 5 GENRES </h2>
                        <div className="all-genres">
                            <p>A list of your favorite genres</p>
                             {genres}
                        </div>
                </div>
            </div>
        );
    }
}




export default HomePage;
