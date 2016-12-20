import React from 'react';
import * as utils from '../utilities';
import Artist from './ArtistComponent';
import Genre from './GenreComponent';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: [],
            genres: []
        };
    }

    componentDidMount() {
        this.get_hash();
        this.fetch_artists();
    }


    fetch_artists() {
        utils.fetch_authorized_data("/me/top/artists", (data) => {
            const top_genres = this.get_top_genres(data.items); // Get top genres from artists in Spotify response
            this.setState({
                artists: data.items,
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
            // a must be equal to b
            return 0;
        });
        genres_array.splice(20); // Get first three items of genres_array as top genres
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
        const artists = this.state.artists.map(artist => {
            return <Artist key={artist.id} artist={artist}/>;
        });

        const genres = this.state.genres.map(genre => {
            return <Genre key={genre.name} genre={genre}/>;
        });

        return (
            <div>
                <h1>SPersonify</h1>
                {artists}
                <ol>
                {genres}
                </ol>
            </div>
        );
    }
}




export default HomePage;
