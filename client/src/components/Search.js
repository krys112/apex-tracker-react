import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

class Search extends Component {
  state = {
    platform: 'psn',
    gamertag: '',
    errors: {}
  }

  handleValidation() {
    let gamertag = this.state.gamertag;
    let errors = {};
    let formIsValid = true;

    if (!gamertag) {
      formIsValid = false;
      errors["empty"] = "Insert a gamertag";
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.handleValidation()) {
      this.props.history.push(`profile/${this.state.platform}/${this.state.gamertag}`);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let errors = this.state.errors;
    return (
      <React.Fragment>
        <section className="search">
          <h1>Track Player Stats</h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label for="platform">Platform</label>
              <select
                platform={this.state.platform}
                onChange={this.onChange}
                name="platform"
              >
                <option value="psn">PlayStation</option>
                <option value="xbl">Xbox</option>
                <option value="origin">Origin</option>
              </select>
              {/*<select name="platform" id="platform" v-model="platform">
                <option value="psn">Playstation</option>
                <option value="xbl">Xbox</option>
                <option value="origin">Origin</option>
                </select> */}
            </div>
            <div className="form-group">
              <label for="gamertag">Gamertag</label>
              <input
                type="text"
                name="gamertag"
                className={classnames({ 'is-invalid': errors["empty"] })}
                placeholder="Origin ID, Xbox Live gamertag, PSN ID, etc"
                value={this.state.gamertag}
                onChange={this.onChange}
              />
              <span className="error">{this.state.errors["empty"]}</span>
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="btn" />
            </div>
          </form>
        </section>
      </React.Fragment>
    )
  }
};

export default withRouter(Search);
