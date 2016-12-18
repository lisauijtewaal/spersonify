import React from 'react';


class Genre extends React.Component{
    render(){
        const genre = this.props.genre;
        return(
           <li>{genre.name}</li>
        )
    }


}

export default Genre;
