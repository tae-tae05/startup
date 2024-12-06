import React from 'react';
import { useState } from 'react';
import './example_project.css';

export function Project_Info() {
    const [project, setProject] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/example_project')
          .then((response) => response.json())
          .then((project) => {
            setProjects(project);
          });
      }, []);

    return (
        <>
        <h2>💠 Project Name 💠</h2>

      <div className="project-info">
        <Hook_Button />
      </div>

      <div className="project-info">
        <Update />
      </div>

      <div className="project-info">
          <Counter_Button />
      </div>

        </>
    );
}

// function Update() {
//     const [text, setInputValue] = useState('');
//     const [text_holder, setCurrentValue] = useState('');

//     const handleInput = (event) => {
//         setInputValue(event.target.value);
//     };

//     const handleClick = () => {
//         if (text.trim() !== '') { //prevent sending empty messages
//             setCurrentValue(text);
//             setInputValue(''); //clear input field after sending
//         }
//       };

//     return (
//         <>
//         <span className="color1">Yarn Type: </span><span>{text_holder} </span>
//         <input type='text' value={text} onChange={handleInput}/>
//         <button className="button button1" onClick={handleClick}>Submit</button>
//         </>
//     );
// }

// function Hook_Button() {
//     const [text, setInputValue] = useState('');
//     const [text_holder, setCurrentValue] = useState('');

//     const handleInput = (event) => {
//         setInputValue(event.target.value);
//     };

//     const handleClick = () => {
//         if (text.trim() !== '') { //prevent sending empty messages
//             setCurrentValue(text);
//             setInputValue(''); //clear input field after sending
//         }
//       };

//     return (
//         <>
//         <span className="color1">Hook: </span><span>{text_holder} </span>
//         <input type='text' value={text} onChange={handleInput}/>
//         <button className="button button1" onClick={handleClick}>Submit</button>
//         </>
//     );
// }

// function Counter_Button() {
//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);
//     const [count3, setCount3] = useState(0);

//     const increment = (index) => {
//         switch (index) {
//             case 1:
//               setCount1(count1 + 1);
//               break;
//             case 2:
//                 setCount2(count2 + 1);
//               break;
//             case 3:
//                 setCount3(count3 + 1);
//               break;
//             default:
//               break;
//           }
//     };

//     const decrease = (index) => {
//         switch (index) {
//             case 1:
//                 if(count1 > 0){
//                     setCount1(count1 - 1);
//                     break;
//                 }
//             case 2:
//                 if(count2 > 0){
//                     setCount2(count2 - 1);
//                     break;
//                 }
//             case 3:
//                 if(count3 > 0){
//                     setCount3(count3 - 1);
//                     break;
//                 }
//             default:
//                 break;
//             }
//     };

//     return (
//         <>
//             <span className="color1">Count: </span>{count1}
//             <button className="button button1" onClick={() => increment(1)}>Up</button>
//             <button className="button button1" onClick={() => decrease(1)}>Down</button>
//             <span className="color1">Count: </span>{count2}
//             <button className="button button1" onClick={() => increment(2)}>Up</button>
//             <button className="button button1" onClick={() => decrease(2)}>Down</button>
//             <span className="color1">Count: </span>{count3}
//             <button className="button button1" onClick={() => increment(3)}>Up</button>
//             <button className="button button1" onClick={() => decrease(3)}>Down</button>
//         </>
//     )
// }
