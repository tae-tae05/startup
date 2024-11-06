import React from 'react';
import './projects.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export function Projects() {
  return (
    <main className="container-fluid text-center">
            <nav>
                <menu>
                    <div className="vertical-menu">
                        <Link className="projectName list_item" to="..">💠 Home 💠</Link>
                        <Link className="projectName list_item" to="../add_project">💠 Add Project 💠</Link>
                        <Link className="projectName list_item" to="../example_project">💠 Example Project 1 💠</Link>
                        <button className="button button1" type="submit">Share</button>
                        <Link className="projectName list_item" to="../example_project">💠 Example Project 2 💠</Link>
                        <button className="button button1" type="submit">Share</button>
                        <Link className="projectName list_item" to="../example_project">💠 Example Project 3 💠</Link>
                        <button className="button button1" type="submit">Share</button>
                    </div>
                </menu>
            </nav>
        </main>
  );
}