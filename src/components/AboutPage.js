import React from 'react';
import '../styles/about-page.css';
import * as utils from '../utilities';
import User from './UserComponent';

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
            console.log(item);
            this.setState({
                user: item
            });
        });
    }

    render()
    {
        const user = this.state.user;

        return (
            <div>
                <h1>SPersonify</h1>
                <h2>User profile</h2>
               <div>
                   <User key={user.uri} user={user} />
               </div>

            </div>
        );
    }
}

export default AboutPage;
