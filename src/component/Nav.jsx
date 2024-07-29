import React from 'react';

function Nav() {
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          <img
            src='../public/logo.jpg'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='logo'
          />
          <h3 className='logo-title'>Travel Hunt</h3>
        </a>
      </nav>
    </div>
  );
}

export default Nav;
