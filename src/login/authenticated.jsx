import React from 'react';

export function Authenticated(props) {

    function logout() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
          })
            .catch(() => {
            })
            .finally(() => {
              localStorage.removeItem('userName');
              props.onLogout();
            });
    }

    return (
        <>
            <main className='container-fluid text-center'>
                <h1>Welcome {props.userName}!</h1>
                <img src="crochet-picture.jpeg" alt="crochet" width="300" height="300" />
                <div>
                    <button className="button1" onClick={() => logout()}>Logout</button>
                </div>
            </main>
        </>
    )
}