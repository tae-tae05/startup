import React, { useState } from 'react';
import './projects.css'
import { Link } from 'react-router-dom';

export function Projects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const project_text = localStorage.getItem('projects');
    if (project_text) {
      setProjects(JSON.parse(project_text));
    }
  }, []);

  return (
    <main className="container-fluid text-center">
            <nav>
                <menu>
                    <div className="vertical-menu">
                        <Link className="projectName list_item" to="..">💠 Home 💠</Link>
                        <Link className="projectName list_item" to="../add_project">💠 Add Project 💠</Link>
                        <Link className="projectName list_item" to="../example_project">💠 Example Project 1 💠</Link>
                        {/* make a way to display all projects from the local storage */}
                    </div>
                </menu>
            </nav>
        </main>
  );
}



// function MyDialog({ isOpen, onClose, children }) {
//     if (!isOpen) return null;
  
//     return (
//       <div className="dialog-overlay">
//         <div className="dialog-content">
//           <button onClick={onClose}>Close</button>
//           {children}
//         </div>
//       </div>
//     );
//   }
  
//   function App() {
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
  
//     return (
//       <div>
//         <button onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
//         <MyDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
//           <h2>Dialog Title</h2>
//           <p>This is the content of the dialog.</p>
//         </MyDialog>
//       </div>
//     );
//   }