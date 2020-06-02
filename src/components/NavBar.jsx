import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/newBeer'}>Add New Beer</Link>
        </li>
        <li>
          <Link to={'/random'}>Random</Link>
        </li>
        <li>
          <Link to={'/beers'}>Beers</Link>
        </li>
        <li>
          <Link to={'/4554545'}>Single Beer</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
