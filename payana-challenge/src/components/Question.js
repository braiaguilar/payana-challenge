import React from 'react';

function Question({ question, onAnswer, goNext, goBack, answer }) {
  if (!question) return <div>Loading...</div>;

  const handleSelect = (value) => {
    onAnswer(question.id, value);
  };

  return (
    <div>
      <h2>{question.texto}</h2>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            style={{
              backgroundColor: answer === value ? 'lightblue' : 'white',
            }}
            onClick={() => handleSelect(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <div>
        <button onClick={goBack} disabled={!goBack}>Previous</button>
        <button onClick={goNext}>Next</button>
      </div>
    </div>
  );
}

export default Question;
