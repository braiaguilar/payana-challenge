import React from 'react';

function Question({ question, onAnswer, answer, goNext, goBack, showPrevious, showNext, showSubmit, onSubmit }) {
  const handleOptionChange = (e) => {
    onAnswer(question.id, Number(e.target.value));
  };

  return (
    <div>
      <h2>{question.texto}</h2>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={answer === value}
              onChange={handleOptionChange}
            />
            {value}
          </label>
        ))}
      </div>
      <div>
        {showPrevious && <button onClick={goBack}>Previous</button>}
        {showNext && <button onClick={goNext}>Next</button>}
        {showSubmit && <button onClick={onSubmit}>Submit</button>}
      </div>
    </div>
  );
}

export default Question;
