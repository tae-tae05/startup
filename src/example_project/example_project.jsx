import React from 'react';
import { useState } from 'react';
import './example_project.css';
import { Fact } from './project_info';
import { useParams } from 'react-router-dom';
import { Chat } from './chat';
import { Event, MessageHandler } from './chatClient';

export function Example_Project(props) {
    const userName = props.userName;
    const [project, setProject] = React.useState([]);
    const { num } = useParams();

    React.useEffect(() => {
        fetch(`/api/example_project/${num}`)
          .then((response) => response.json())
          .then((project) => {
            setProject(project);
          });
      }, []);

    MessageHandler.broadcastEvent(userName, Event.Enter, {});

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
                <Counter />
            </div>

            <h2>Message History</h2>
                <div>
                    <Chat />
                    <Fact />
                </div>

        </main>
        );
}



function Counter() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const [, forceRender] = useState(undefined);

    const [project, setProject] = React.useState([]);
    const { num } = useParams();

    React.useEffect(() => {
        fetch(`/api/example_project/${num}`)
          .then((response) => response.json())
          .then((project) => {
            setProject(project);
          });
      }, []);

    // Update `count#` when `project` is updated
    React.useEffect(() => {
        if (project) {
            setCount1(project.counter1);  // Set count1 based on project.counter1
            setCount2(project.counter2);  // Set count2 based on project.counter1
        setCount3(project.counter3);  // Set count3 based on project.counter1
        }
    }, [project]); // Trigger this when `project` changes


    // Increment counters in DB with API call
    async function handleIncrement(num, index) {
        await fetch(`/api/increment/${num}/${index}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' }
          });
    }

    // Increment counters in DB with API call
    async function handleDecrement(num, index) {
        await fetch(`/api/decrease/${num}/${index}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' }
          });
    }

    const increment = (index) => {
        handleIncrement(num, index)
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
        handleDecrement(num, index)
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
        <>
        <span className="color1">Count: </span>{count1}
            <button className="button button1" onClick={() => increment(1)}>Test</button>
            <button className="button button1" onClick={() => decrease(1)}>Down</button>
        <span className="color1">Count: </span>{count2}
            <button className="button button1" onClick={() => increment(2)}>Up</button>
            <button className="button button1" onClick={() => decrease(2)}>Down</button>
        <span className="color1">Count: </span>{count3}
            <button className="button button1" onClick={() => increment(3)}>Up</button>
            <button className="button button1" onClick={() => decrease(3)}>Down</button>
        </>
    )
}
