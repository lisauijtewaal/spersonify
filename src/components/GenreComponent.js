import React from 'react';


class Genre extends React.Component{

    render(){
        const genre = this.props.genre;
        return(
            <div className="genre">
                <li>{genre.name}</li>
            </div>
        )
    }


}

export default Genre;
