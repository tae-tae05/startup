import React from 'react';
import "./add_project.css";

export function Add_Project() {
  return (
    <main class="parent">
            <form method="get" action="projects.html">
                <div class="box_input">
                    <label for="name">Project Name</label>
                    <input type="text" id="name" value="enter name here" readonly />
                </div>
                <div class="box_input">
                    <label for="count">Hook Size</label>
                    <input type="text" id="count" value="- mm" readonly />
                </div>
                <div class="box_input">
                    <label for="yarn">Yarn Type</label>
                    <input type="text" id="yarn" value="enter yarn here" readonly />
                </div>
                <button class="button1 ml-auto" type="submit">Submit</button>
            </form>
        </main>

  );
}