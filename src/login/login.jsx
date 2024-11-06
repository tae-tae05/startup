import React from 'react';

export function Login() {
  return (
    <main className='container-fluid text-center'>
        <img src="crochet-picture.jpeg" alt="crochet" width="300" height="300" />
        <div>
        <h1>Login</h1>
        <form method="get" action="projects.html">
            <div class="input-group mb-3">
                <input class="form-control" type="text" placeholder="email" />   
            </div>
            <div class="input-group mb-3">
                <input class="form-control" type="text" placeholder="password" />   
            </div>
        <button type="submit" class="button1">Login</button>
        <button type="submit" class="button2">Register</button>
        </form>
        </div>
    </main>
  );
}