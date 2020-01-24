import React from 'react';
import Search from './Search';
import logo from '../assets/logo.png';

const Index = () => {
  return (
    <React.Fragment>
      <div className="container">
        {document.body.classList.add('body-bg-image')}
        <img src={logo} alt="logo" />
        <Search />
      </div>
    </React.Fragment>
  )
}

export default Index;
