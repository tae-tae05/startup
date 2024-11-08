import React, { useState } from 'react';
import './projects.css'
import { Link } from 'react-router-dom';

export function Projects() {
  return (
    <main className="container-fluid text-center">
            <nav>
                <menu>
                    <div className="vertical-menu">
                        <Link className="projectName list_item" to="..">💠 Home 💠</Link>
                        <Link className="projectName list_item" to="../add_project">💠 Add Project 💠</Link>
                        <Link className="projectName list_item" to="../example_project">💠 Example Project 1 💠</Link>
                        <Share_Popup />
                        <Link className="projectName list_item" to="../example_project">💠 Example Project 2 💠</Link>
                        <Share_Popup />
                        <Link className="projectName list_item" to="../example_project">💠 Example Project 3 💠</Link>
                        <Share_Popup />
                    </div>
                </menu>
            </nav>
        </main>
  );
}

function Share_Popup() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true); // Set popup to open on button click
    };
     
    const handleClosePopup = () => {
        setIsPopupOpen(false); // Set popup to close
    };

    return (
        <button className="button button1" type="submit">Share</button>
    );
}