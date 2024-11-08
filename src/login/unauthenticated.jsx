import React from 'react';
import { Link } from 'react';

import Button from 'react-bootstrap/Button';
// import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
    }

    return (
        <>
        <main className='container-fluid text-center'>
        <img src="crochet-picture.jpeg" alt="crochet" width="300" height="300" />
        <div>
        <h1>Login</h1>
        <form method="get" action="projects.html">
            <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder="email" />   
            </div>
            <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder="password" />   
            </div>
        {/* <Link_Page /> */}
        </form>
        </div>
        </main>
        </>
    );
}

// function Link_Page() {
//     return (
//       <Link to="/projects">
//         <button className="button1">Login</button>
//         <button className="button2">Register</button>
//       </Link>
//     );
// } 