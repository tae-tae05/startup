import React from 'react';
import './example_project.css';

export function Fact() {
  const [fact, setFact] = React.useState('Loading fact...');

  React.useEffect(() => {
      fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        .then((response) => response.json())
        .then((data) => {
            setFact(data.text);
        })
        .catch();
  }, []);

    return (
        <>
        <p className='fact'>{fact}</p>
        </>
    );
}