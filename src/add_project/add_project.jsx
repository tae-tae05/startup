import React from 'react';
import "./add_project.css";

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
                <button className="button1 ml-auto" type="submit">Submit</button>
            </form>
        </main>

  );
}