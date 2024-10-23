import React from 'react';

function Summary({ answers }) {
  return (
    <div>
      <h2>Your answers summary</h2>
      <ul>
        {Object.entries(answers).map(([id, value]) => (
          <li key={id}>
            Question {id}: {value} / 5
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;
