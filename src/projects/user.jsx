import { ProjectEvent, ProjectNotifier } from '../projects/projectNotifier';
import React from 'react';
import "../add_project/add_project.css";

export function User() {

    const [events, setEvent] = React.useState([]);

    React.useEffect(() => {
        ProjectNotifier.addHandler(handleProjectEvent);

        return () => {
            ProjectNotifier.removeHandler(handleProjectEvent);
        };
    });

    function handleProjectEvent(event) {
        setEvent([...events, event]);
      }

    function createMessageArray() {
        const messageArray = [];
        for (const [i, event] of events.entries()) {
            let message = 'unknown';
            if (event.type === ProjectEvent.Submit) {
            message = ` was added as a project`;
            } else if (event.type === ProjectEvent.System) {
            message = event.value.msg;
            }

            messageArray.push(
            <div key={i} className='event'>
                <span className={'player-event'}>{event.from}</span>
                {message}
            </div>
        );
    }
    return messageArray;
    }

    return (
        <>
        <div>
          <div className='announcement' id='player-box'>{createMessageArray()}</div>
        </div>
        </>
      );
}