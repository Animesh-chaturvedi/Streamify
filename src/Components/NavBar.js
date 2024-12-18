import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center position-fixed start-0 top-0 end-0">
      <a className="navbar-brand" href='/' style={{ color: 'rgb(72, 149, 247)', fontSize: '24px', fontWeight: 700 }}>
        Streamify
      </a>
    </nav>
);
}

export default Navbar;