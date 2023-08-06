import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Daniel Jacob Radcliffe',
      bio: 'A talented actor',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Daniel_Radcliffe_in_July_2015.jpg/344px-Daniel_Radcliffe_in_July_2015.jpg',
      profession: 'actor',
    },
    shows: true,
    interval: 0,
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, shows, interval } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {interval} seconds</p>
      </div>
    );
  }
}

export default App;




