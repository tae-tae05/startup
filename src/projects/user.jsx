import { ProjectEvent, ProjectNotifier } from '../projects/projectNotifier';
import React from 'react';
import './projects.css'

export function User(props) {

    const userName = props.userName;

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
                <span className={'player-event'}>{event.from.split('@')[0]}</span>
                {message}
            </div>
        );
    }
    return messageArray;
    }

    return (
        <>
          <p className='list_item'>Player</p>
          <div id='player-messages'>{createMessageArray()}</div>
        </>
      );
}