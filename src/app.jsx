import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className='body bg-dark'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Jin Han<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='index.html'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='projects.html'>
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='add_project.html'>
                  Add Project
                </a>
              </li>
            </menu>
          </nav>
        </header>
  
        <main>
            App components go here
        </main>
  
        <footer className='text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Jin Han</span>
            <a className='text-reset' href="https://github.com/tae-tae05/startup.git">
              Github
            </a>
          </div>
        </footer>
      </div>
    );
  }