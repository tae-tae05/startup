import React from 'react';
import './projects.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

export function Projects() {
  return (
    <main className="container-fluid text-center">
            <nav>
                <menu>
                    <div className="vertical-menu">
                        <a className="projectName list_item" href="index.html">💠 Home 💠</a>
                        <a className="projectName list_item" href="add_project.html">💠 Add Project 💠</a>
                        <a className="projectName list_item" href="example_project.html">💠 Example Project 1 💠</a>
                        <button className="button button1" type="submit">Share</button>
                        <a className="projectName list_item" href="example_project.html">💠 Example Project 2 💠</a>
                        <button className="button button1" type="submit">Share</button>
                        <a className="projectName list_item" href="example_project.html">💠 Example Project 3 💠</a>
                        <button className="button button1" type="submit">Share</button>
                    </div>
                </menu>
            </nav>
        </main>
  );
}