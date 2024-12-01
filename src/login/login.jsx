import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';


export function Login({ userName, authState, onAuthChange }) {
  return (
    <>
    <main className='container-fluid text-center'>
        <div>
          {authState !== AuthState.Unknown}
          {authState === AuthState.Authenticated && (
            <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
          )}
          {authState === AuthState.Unauthenticated && (
            <Unauthenticated
              userName={userName}
              onLogin={(loginUserName) => {
                onAuthChange(loginUserName, AuthState.Authenticated);
              }}
            />
          )}
        </div>
    </main>
    </>
  );
}

// function Link_Page() {
//   return (
//     <Link to="/projects">
//       <button className="button1">Login</button>
//       <button className="button2">Register</button>
//     </Link>
//   );
// }