import React from 'react';
import { useState } from 'react';
import './example_project.css';
import { Fact } from './project_info';
import { useParams } from 'react-router-dom';


export function Example_Project(props) {
    const [project, setProject] = React.useState([]);
    const { num } = useParams();

    React.useEffect(() => {
        fetch(`/api/example_project/${num}`)
          .then((response) => response.json())
          .then((project) => {
            setProject(project);
          });
      }, []);

      const [count1, setCount1] = useState(project.counter1);
      const [count2, setCount2] = useState(project.counter2);
      const [count3, setCount3] = useState(project.counter3);
  
      const increment = (index) => {
          switch (index) {
              case 1:
                setCount1(count1 + 1);
                break;
              case 2:
                  setCount2(count2 + 1);
                break;
              case 3:
                  setCount3(count3 + 1);
                break;
              default:
                break;
            }
      };
  
      const decrease = (index) => {
          switch (index) {
              case 1:
                  if(count1 > 0){
                      setCount1(count1 - 1);
                      break;
                  }
              case 2:
                  if(count2 > 0){
                      setCount2(count2 - 1);
                      break;
                  }
              case 3:
                  if(count3 > 0){
                      setCount3(count3 - 1);
                      break;
                  }
              default:
                  break;
              }
      };
   
    return (
        <main className='container-fluid text-center'>
            <h2>💠 {project.name} 💠</h2>
            <div className="project-info">
                <span className="color1">Hook: </span><span>{project.hook} </span>
            </div>
            <div className="project-info">
            <span className="color1">Yarn Type: </span><span>{project.yarn} </span>
            </div>

            <div className="project-info">
                <span className="color1">Count: </span>{count1}
                <button className="button button1" onClick={() => increment(1)}>Up</button>
                <button className="button button1" onClick={() => decrease(1)}>Down</button>
                <span className="color1">Count: </span>{count2}
                <button className="button button1" onClick={() => increment(2)}>Up</button>
                <button className="button button1" onClick={() => decrease(2)}>Down</button>
                <span className="color1">Count: </span>{count3}
                <button className="button button1" onClick={() => increment(3)}>Up</button>
                <button className="button button1" onClick={() => decrease(3)}>Down</button>
            </div>

            <h2>Message History</h2>
                <div>
                    <Chat />
                    <Fact />
                </div>

        </main>
    );
}



function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInput = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        if (message.trim() !== '') { //prevent sending empty messages
            setMessages([...messages, message]);
            setMessage(''); //clear input field after sending
        }
    };

    return (
        <div>
            <ul>
                {messages.map((msg, index) => (
                    <li className="messaging" key={index}>{msg}</li>
                ))}
            </ul>
            <input
            type="text"
            value={message}
            onChange={handleInput}
            ></input>
            <button className="button button1" onClick={sendMessage}>Send</button>
        </div>
    )
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
//     const [project, setProject] = React.useState([]);
//     const { num } = useParams();

//     React.useEffect(() => {
//         fetch(`/api/example_project/${num}`)
//           .then((response) => response.json())
//           .then((project) => {
//             setProject(project);
//           });
//       }, []);

//     const hook = project.hook;
//     const [text, setInputValue] = useState('');
//     const [text_holder, setCurrentValue] = useState(hook);

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

