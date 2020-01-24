import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

import logo from '../assets/logo.png';

class Profile extends Component {
  state = {
    profile: {},
    error: ''
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/v1/profile/${this.props.match.params.platform}/${this.props.match.params.gamertag}`)
      .then(res => {
        this.setState({ profile: res.data.data });
      })
      .catch(err => this.setState({ error: err.response.data.message }));
  };

  render() {
    document.body.classList.remove('body-bg-image');
    const { profile, error } = this.state;
    if (profile === undefined || Object.keys(profile).length === 0) {
      return <Spinner err={error} />
    }
    else {
      return (
        <React.Fragment>
          <section>
            <div className="container">
              <img src={logo} alt="logo" />
              <div className="container2">
                <h1 className="gamertag">
                  <img src={profile.platformInfo.avatarUrl} alt="" className="platform-avatar" />
                  {profile.platformInfo.platformUserId}
                </h1>
                <div className="grid">
                  <div>
                    <img src={profile.segments[1].metadata.imageUrl} alt="" />
                  </div>
                  <ul>
                    <li>
                      <h4>Selected Legend</h4>
                      <p>
                        {profile.metadata.activeLegendName}
                      </p>
                    </li>
                    <li>
                      <h4>Apex Level</h4>
                      <p>
                        {profile.segments[0].stats.level.displayValue}
                        <span> ({profile.segments[0].stats.level.percentile}%)</span>
                      </p>
                    </li>
                    <li>
                      <h4>Lifetime Kills</h4>
                      <p>
                        {profile.segments[0].stats.kills.displayValue}
                        <span> ({profile.segments[0].stats.kills.percentile}%)</span>
                      </p>
                    </li>
                    {console.log(profile.segments[0].stats)}
                    {profile.segments[0].stats.damage !== undefined &&
                      <li>
                        <h4>Damage Done</h4>
                        <p>
                          {profile.segments[0].stats.damage.displayValue}
                          <span> ({profile.segments[0].stats.damage.percentile}%)</span>
                        </p>
                      </li>
                    }
                  </ul>
                </div>
                <Link to="/">Go Back</Link>
              </div>

            </div>
          </section>
        </React.Fragment>
      )
    }
  }
};

export default Profile;
