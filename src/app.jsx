import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Add_Project } from './add_project/add_project';
import { Projects } from './projects/projects';

export default function App() {
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
              <li className='nav-item'>
                <NavLink className='nav-link' to='projects'>
                  Projects
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='add_project'>
                  Add Project
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/projects' element={<Projects />} />
            <Route path='/add_project' element={<Add_Project />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer className='text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Jin Han</span>
            <NavLink className='text-reset' href="https://github.com/tae-tae05/startup.git">
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