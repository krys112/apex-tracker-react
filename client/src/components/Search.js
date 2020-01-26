import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

const Search = (props) => {
  const [platform, setPlatform] = useState('psn');
  const [gamertag, setGamertag] = useState('');
  const [error, setError] = useState('');

  const handleValidation = () => {
    let formIsValid = true;

    if (!gamertag) {
      formIsValid = false;
      setError('Insert a gamertag');
      console.log(error);
    }
    return formIsValid;
  };

  const onSubmit = e => {
    e.preventDefault();

    if (handleValidation()) {
      props.history.push(`profile/${platform}/${gamertag}`);
    }
  };

  const onChangePlat = e => {
    setPlatform(e.target.value);
  }

  const onChangeTag = e => {
    setGamertag(e.target.value);
  };

  return (
    <>
      <section className="search">
        <h1>Track Player Stats</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label for="platform">Platform</label>
            <select
              platform={platform}
              onChange={onChangePlat}
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
              className={classnames({ 'is-invalid': error })}
              placeholder="Origin ID, Xbox Live gamertag, PSN ID, etc"
              value={gamertag}
              onChange={onChangeTag}
            />
            <span className="error">{error}</span>
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
      </section>
    </>
  )
};

export default withRouter(Search);
