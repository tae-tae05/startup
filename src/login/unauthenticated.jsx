import React from 'react';

import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    // const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
        // localStorage.setItem('userName', userName);
        // props.onLogin(userName);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
        // localStorage.setItem('userName', userName);
        // props.onLogin(userName);
    }

    async function login_create() {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
          } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
          }
    }

    return (
        <>
            <img src="crochet-picture.jpeg" alt="crochet" width="300" height="300" />
                <div>
                <h1>Login</h1>
                    <form method="get" action="projects.html">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="email" />   
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />   
                        </div>
                        <button className="button1" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
                        <button className="button2" onClick={() => createUser()} disabled={!userName || !password}>Register</button>
                    </form>
                </div>
        </>
    );
}
