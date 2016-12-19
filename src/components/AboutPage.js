import React from 'react';
import '../styles/about-page.css';
import * as utils from '../utilities';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: []
        };
    }

    componentDidMount() {

        this.fetch_userinfo();
    }

    fetch_userinfo()
    {
        utils.fetch_authorized_data("/me", (data) => {
            const item = data;
            this.setState({
                user: item
            });
        });
    }

    render()
    {
        const user = this.state.user.display_name;


        return (
            <div>
                <h1>SPersonify</h1>
               <div>
                   <h2>{user}</h2>
               </div>

            </div>
        );

    }


}

export default AboutPage;
