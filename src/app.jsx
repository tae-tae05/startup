import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Add_Project } from './add_project/add_project';
import { Projects } from './projects/projects';
import { Example_Project } from './example_project/example_project';
import { AuthState } from './login/authState';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
      <div className='body bg-dark'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Jin Han<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Home
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
              <li className='nav-item'>
                <NavLink className='nav-link' to='projects'>
                  Projects
                </NavLink>
              </li>
              )}
              {authState === AuthState.Authenticated && (
              <li className='nav-item'>
                <NavLink className='nav-link' to='add_project'>
                  Add Project
                </NavLink>
              </li>
              )}
            </menu>
          </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />} exact />
            <Route path='/projects' element={<Projects userName={userName}/>} />
            <Route path='/add_project' element={<Add_Project />} />
            <Route path='/example_project' element={<Example_Project userName={userName}/>} />
            <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer className='text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Jin Han</span>
            <NavLink className='text-reset' to="https://github.com/tae-tae05/startup.git">
              Github
            </NavLink>
          </div>
        </footer>
      </div>
      </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
  }

export default App;