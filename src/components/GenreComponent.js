import React from 'react';


class Genre extends React.Component{

    render(){
        const genre = this.props.genre;
        return(

                <div className="genre">
                    <ul>
                         <li>{genre.name}</li>
                        <br></br>
                    </ul>
                </div>
        )
    }


}

export default Genre;
