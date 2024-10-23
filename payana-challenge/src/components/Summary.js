import React from 'react';

function Summary({ answers, questions, onEdit }) {
  return (
    <div>
      <h2>Survey Summary</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <strong>{question.texto}:</strong> {answers[question.id]}
          </li>
        ))}
      </ul>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default Summary;
