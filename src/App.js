import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    return (
      <div className="title-button-container">
        <div className="fixed-header">
          <h1>Check State</h1>
          <button className="btn" onClick={this.handleToggle}>
            {this.state.shows ? 'Cacher' : 'Afficher'}
          </button>
        </div>
        {this.state.shows && (
          <div className="profile-container">
            <Person />
          </div>
        )}
      </div>
    );
  }
}
