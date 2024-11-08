import React from 'react';
import "./add_project.css";
import { Link } from 'react-router-dom';


export function Add_Project() {
  return (
    <main className="parent">
            <form method="get" action="projects.html">
                <div className="box_input">
                    <label for="name">Project Name</label>
                    <input type="text" id="name" value="enter name here" readonly />
                </div>
                <div className="box_input">
                    <label for="count">Hook Size</label>
                    <input type="text" id="count" value="- mm" readonly />
                </div>
                <div className="box_input">
                    <label for="yarn">Yarn Type</label>
                    <input type="text" id="yarn" value="enter yarn here" readonly />
                </div>
                <Link_Page />
            </form>
        </main>

  );
}

function Link_Page() {
  return (
    <Link to="/example_project">
      <button className="button1">Submit</button>
    </Link>
  );
}