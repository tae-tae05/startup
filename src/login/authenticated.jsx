import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
  }

  return (
    <>
    <div>
      <div className='playerName'>{props.userName}</div>
        {/* make a button that will logout the user here */}
        <p>made it to authenticated</p>
    </div>
    </>
  )
}