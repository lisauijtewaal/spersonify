import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


class App extends React.Component {
  render() {
    return (
      <div>
        <IndexLink to="/">Login</IndexLink>
        {' | '}
        <Link to="/about">About</Link>
          {' | '}
          <Link to="/home">Homepage</Link>
          <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
