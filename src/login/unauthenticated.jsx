import React from 'react';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    // const [displayError, setDisplayError] = React.useState(null);

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
                            <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="email" />   
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />   
                        </div>
                        <button className="button1" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
                        <button className="button2" onClick={() => loginUser()} disabled={!userName || !password}>Register</button>
                    </form>
                </div>
        </main>
        </>
    );
}
