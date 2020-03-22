import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link href="" to="/">Home</Link>
        </div>
        <div>
          <Link href="" to="/about">About</Link>
        </div>
        <div>
          <Link href="" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
