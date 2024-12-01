import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
          })
            .catch(() => {
              // Logout failed. Assuming offline
            })
            .finally(() => {
              localStorage.removeItem('userName');
              props.onLogout();
            });
        // localStorage.removeItem('userName');
        // props.onLogout();
    }

    return (
        <>
            <main className='container-fluid text-center'>
                <h1>Welcome {props.userName}!</h1>
                <img src="crochet-picture.jpeg" alt="crochet" width="300" height="300" />
                <div>
                    <button className="button1" onClick={() => logout()}>Logout</button>

                    {/* make a button that will logout the user here */}
                </div>
            </main>
        </>
    )
}