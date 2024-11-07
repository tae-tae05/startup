import React from 'react';

export function Login() {
  return (
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
        <button type="submit" className="button1">Login</button>
        <button type="submit" className="button2">Register</button>
        </form>
        </div>
    </main>
  );
}