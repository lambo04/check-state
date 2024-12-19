import React, { Component } from 'react';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Omar',
        bio: 'Full Stack',
        imgSrc:
          'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png',
        profession: 'Développeur',
      },
      timer: 0,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { timer } = this.state;

    return (
      <div className="profile-container">
        <h3>Temps écoulé : {timer} secondes</h3>
        <h2>{fullName}</h2>
        <img src={imgSrc} alt={fullName} />
        <p>{bio}</p>
        <h4>{profession}</h4>
      </div>
    );
  }
}
