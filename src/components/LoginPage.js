import React from 'react';

class LoginPage extends React.Component {
    render() {
        return (
            // login with Spotify
            <div>
                <a href={`https://accounts.spotify.com/authorize?client_id=2cd7be2114d340bc8014da94c4c45b69&response_type=token&redirect_uri=${window.location.origin}/home&scope=user-top-read`}
                   id="login-link">Login met Spotify</a>
            </div>
        )
    };
}


export default LoginPage;
